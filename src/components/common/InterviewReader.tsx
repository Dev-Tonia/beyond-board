"use client";

import mammoth from "mammoth";
import { useState, useEffect } from "react";

interface InterviewEntry {
  speaker: string;
  text: string;
  section: string;
}

const InterviewReader = ({ url }: { url: string }) => {
  const [interviewData, setInterviewData] = useState<InterviewEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  //   const [sections, setSections] = useState<string[]>([]);

  const parseInterviewData = (rawData: string): InterviewEntry[] => {
    const lines: string[] = rawData
      .split("\n")
      .filter((line) => line.trim() !== "");
    const result: InterviewEntry[] = [];
    let currentSpeaker: string = "";
    let currentText: string = "";
    let currentSectionTitle: string = "Introduction";
    const sectionsList: string[] = ["Introduction"];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("Section") && line.includes(":")) {
        currentSectionTitle = line;
        if (!sectionsList.includes(currentSectionTitle)) {
          sectionsList.push(currentSectionTitle);
        }
      }

      if (line.includes(":")) {
        if (currentSpeaker) {
          result.push({
            speaker: currentSpeaker,
            text: currentText.trim(),
            section: currentSectionTitle,
          });
        }

        const colonIndex = line.indexOf(":");
        const speaker = line.substring(0, colonIndex).trim();
        const text = line.substring(colonIndex + 1).trim();

        currentSpeaker = speaker;
        currentText = text;
      } else {
        currentText += " " + line.trim();
      }
    }

    if (currentSpeaker) {
      result.push({
        speaker: currentSpeaker,
        text: currentText.trim(),
        section: currentSectionTitle,
      });
    }

    // setSections(sectionsList);
    return result;
  };

  useEffect(() => {
    const loadInterviewData = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the file as ArrayBuffer
        const buffer = await response.arrayBuffer();

        // Convert DOCX to text using mammoth
        const result = await mammoth.extractRawText({ arrayBuffer: buffer });
        const text = result.value;

        // Parse the converted text
        const parsed = parseInterviewData(text);
        setInterviewData(parsed);
      } catch (error) {
        console.error("Error loading interview data:", error);
        setError(`Failed to load interview data: ${(error as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    loadInterviewData();
  }, []);
  const filterBySection = (
    data: InterviewEntry[],
    section: string | null
  ): InterviewEntry[] => {
    if (!section) return data;
    return data.filter((item) => item.section === section);
  };

  const displayData = currentSection
    ? filterBySection(interviewData, currentSection)
    : interviewData;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {loading ? (
        <div className="flex justify-center py-12">
          <p>Loading interview data...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded">
          <p>{error}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {displayData.map((item, index) => {
            return (
              <div key={index}>
                <p className="font-semibold">{item.speaker}:</p>

                <p className="mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InterviewReader;

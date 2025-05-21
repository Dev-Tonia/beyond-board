"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import InterviewReader from "./InterviewReader";
import { getParticipantInterviewById } from "@/data/participant";
import AudioPlayer from "./AudioPlayer";

// Define the Participant interface
interface Participant {
  id: number;
  participant: string;
  image: string;
  quote: string;
  interviewQuestion: string;
  audio: string;
  from: string;
  careerBefore: string;
  careerAfter: string;
}

export default function InterviewModal({
  participantId,
  closeModal,
}: {
  participantId: number;
  closeModal: () => void;
}) {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const data: any = getParticipantInterviewById(participantId);
      setParticipant(data);
    } catch (error) {
      console.error("Error loading participant data:", error);
      setParticipant(null);
    } finally {
      setLoading(false);
    }
  }, [participantId]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!participant) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
        <div className="text-white">Failed to load participant data</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <div className="wrapper pt-10 pb-10">
        {/* close modal button */}
        <div className="flex justify-end pb-4">
          <button
            onClick={closeModal}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* modal content */}
        <div className="bg-white w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl">
          <div className="relative p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-[500px] aspect-square bg-gray-200 rounded-md overflow-hidden">
                  {participant.image && (
                    <Image
                      src={participant.image}
                      alt={`Participant ${participantId}`}
                      width={500}
                      height={400}
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold">
                    {participant.participant}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span>{participant.from}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12L12 8M12 8L8 4M12 8H4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>USA</span>
                  </div>
                  <p className="mt-2">
                    {participant.careerBefore} - {participant.careerAfter}
                  </p>
                  <div className="mt-4 space-y-2">
                    {participant.audio && (
                      <div className="mt-2 mb-4">
                        <AudioPlayer audioSource={participant.audio} />
                      </div>
                    )}
                    <a
                      href="https://docs.google.com/document/d/1qv7xSKbY8hsIWXHtCVk5tpYMZTXI8u5s/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#237A15] hover:underline flex items-center gap-1"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2.5V13.5M8 2.5L4 6.5M8 2.5L12 6.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Thematic Analysis
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                {participant.quote && (
                  <h3 className="text-lg font-semibold mb-4">
                    {participant.quote}
                  </h3>
                )}

                <div className="space-y-4">
                  <InterviewReader url={participant.interviewQuestion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

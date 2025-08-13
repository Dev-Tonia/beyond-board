"use client";

import AudioPlayer from "@/components/common/AudioPlayer";
import InterviewReader from "@/components/common/InterviewReader";
import SecondHeading from "@/components/common/second-heading";
import { getParticipantInterviewById } from "@/data/participant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  link: string;
}

export default function Story({ params }: { params: { id: number } }) {
  const { id } = params;
  const router = useRouter();

  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const numericId = Number(id);
        const data = await getParticipantInterviewById(numericId);
        setParticipant(data);
      } catch (error) {
        // console.error(error);
        setParticipant(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
    <section className="relative min-h-[90vh] w-full bg-neutral-50 text-neutral-800 pt-[90px]">
      <div className="px-6 flex items-center gap-4">
        {/* ✅ Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
        >
          ← Back
        </button>

        <SecondHeading
          title={participant.name + " Interview"}
          textColor="text-neutral-800"
        />
      </div>
      <div className="relative p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 max-w-[500px]">
            <div className="relative w-full md:w-[500px] aspect-square bg-gray-200 rounded-md overflow-hidden">
              {participant.image && (
                <Image
                  src={participant.image}
                  alt={`Participant ${participant.id}`}
                  width={500}
                  height={400}
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">{participant.participant}</h2>
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
                  href={participant.link}
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
    </section>
  );
}

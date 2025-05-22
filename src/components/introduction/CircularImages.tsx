"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SecondHeading from "../common/second-heading";

// Define TypeScript interfaces
interface ProfilePosition {
  top: string;
  left: string;
  zIndex: number;
}

interface Profile {
  id: number;
  imageUrl: string;
  position: ProfilePosition;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface CircleConfig {
  radius: string;
  count: number;
}

const CircularProfiles: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Generate profiles in a circular arrangement
  const generateCircularProfiles = (
    width: number,
    height: number
  ): Profile[] => {
    const totalProfiles: number = 30;
    const newProfiles: Profile[] = [];

    // Create more compact circular paths with smaller radii
    const circles: CircleConfig[] = [
      { radius: "32%", count: 14 }, // Outer circle with more profiles
      { radius: "22%", count: 10 }, // Middle circle
      { radius: "12%", count: 6 }, // Inner circle with fewer profiles
    ];

    let idCounter: number = 1;

    circles.forEach((circle: CircleConfig) => {
      const { radius, count } = circle;
      const radiusValue: number = parseInt(radius, 10);

      for (let i = 0; i < count; i++) {
        if (idCounter <= totalProfiles) {
          // Calculate position along the circle using parametric equations
          const angle: number = (i / count) * 2 * Math.PI;
          const centerX: number = 50; // Center X percentage
          const centerY: number = 50; // Center Y percentage

          // Reduced randomness for tighter formation
          const randomOffset: number = Math.random() * 3 - 1.5;

          newProfiles.push({
            id: idCounter,
            // Use the actual image path pattern provided
            imageUrl: `/img/participants/participant-${idCounter}.png`,
            position: {
              // Convert to percentage positions from center
              top: `${centerY + Math.sin(angle) * radiusValue + randomOffset}%`,
              left: `${
                centerX + Math.cos(angle) * radiusValue + randomOffset
              }%`,
              zIndex: Math.floor(Math.random() * 10),
            },
          });

          idCounter++;
        }
      }
    });

    return newProfiles;
  };

  useEffect(() => {
    // Handle client-side only code
    setIsMounted(true);

    // Calculate container dimensions
    const updateContainerSize = (): void => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initialize container size
    updateContainerSize();

    // Set initial profiles after getting container size
    setProfiles(
      generateCircularProfiles(window.innerWidth, window.innerHeight)
    );

    // Set up window resize listener
    const handleResize = (): void => {
      updateContainerSize();
      setProfiles(
        generateCircularProfiles(window.innerWidth, window.innerHeight)
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate responsive profile size based on container width
  const getProfileSize = (): number => {
    if (!isMounted) return 60; // Default size before mount

    // Increased base size factor for larger overlapping profiles
    const baseSize: number =
      Math.min(containerSize.width, containerSize.height) * 0.09;
    const minSize: number = 45;
    const maxSize: number = 85;
    return Math.max(minSize, Math.min(maxSize, baseSize));
  };

  // Show nothing until client-side mounting is complete
  if (!isMounted) {
    return <div className="w-full h-screen bg-blue-100"></div>;
  }

  return (
    <section className=" py-16">
      <div className="wrapper">
        <SecondHeading
          title="Who We Spoke To"
          className=" max-w-[300px]"
          textColor="text-neutral-800"
        />

        <div className="relative w-full h-[80vh]  overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5/6 h-5/6 max-w-4xl max-h-4xl">
              {profiles.map((profile: Profile) => {
                const profileSize: number = getProfileSize();
                return (
                  <div
                    key={profile.id}
                    className="absolute rounded-full border-2 border-white shadow-md overflow-hidden transition-transform hover:scale-110 hover:z-20"
                    style={{
                      width: `${profileSize}px`,
                      height: `${profileSize}px`,
                      top: profile.position.top,
                      left: profile.position.left,
                      zIndex: profile.position.zIndex,
                      transform: `translate(-50%, -50%)`, // Center the profile at its position
                    }}
                  >
                    {/* Next.js Image component with required width/height props */}
                    <div className="relative w-full h-full">
                      <Image
                        src={profile.imageUrl}
                        alt={`Participant ${profile.id}`}
                        fill
                        sizes="(max-width: 768px) 45px, 85px"
                        className="object-cover"
                        priority={profile.id <= 5} // Prioritize loading for first few images
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularProfiles;

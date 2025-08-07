"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import SecondHeading from "../common/second-heading";
import { participants } from "@/data/participant";

// Define TypeScript interfaces
interface ProfilePosition {
  top: string;
  left: string;
  zIndex: number;
  orbitIndex: number;
  angleOffset: number;
}

interface Profile {
  id: number;
  imageUrl: string;
  position: ProfilePosition;
  name: string;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface OrbitConfig {
  radius: number;
  count: number;
  speed: number; // Animation speed multiplier
}

const OrbitalProfiles: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 600,
    height: 600,
  });
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [animationTime, setAnimationTime] = useState<number>(0);

  // Generate profiles in orbital arrangement
  const generateOrbitalProfiles = (
    width: number,
    height: number
  ): Profile[] => {
    const totalProfiles: number = 30;
    const newProfiles: Profile[] = [];

    // Use the smaller dimension for consistent circles
    const containerRadius = Math.min(width, height) / 2;

    // Define orbital rings with different speeds for dynamic effect
    const orbits: OrbitConfig[] = [
      { radius: containerRadius * 0.8, count: 12, speed: 1 }, // Outer orbit
      { radius: containerRadius * 0.6, count: 10, speed: 1.5 }, // Middle orbit
      { radius: containerRadius * 0.4, count: 8, speed: 2 }, // Inner orbit
    ];

    let idCounter: number = 1;

    orbits.forEach((orbit: OrbitConfig, orbitIndex: number) => {
      const { radius, count } = orbit;

      for (let i = 0; i < count && idCounter <= totalProfiles; i++) {
        // Calculate evenly spaced positions around the orbit
        const baseAngle: number = (i / count) * 2 * Math.PI;

        // Add some offset for more natural distribution
        const angleOffset = (Math.random() - 0.5) * 0.3;
        const angle = baseAngle + angleOffset;

        // Center of the container
        const centerX: number = width / 2;
        const centerY: number = height / 2;

        // Calculate position on the orbit
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Add slight radius variation for organic feel
        const radiusVariation = (Math.random() - 0.5) * 20;
        const adjustedX =
          centerX + Math.cos(angle) * (radius + radiusVariation);
        const adjustedY =
          centerY + Math.sin(angle) * (radius + radiusVariation);

        newProfiles.push({
          id: idCounter,
          imageUrl: `/img/participants/participant-${idCounter}.png`,
          user: participants[idCounter - 1],
          position: {
            left: `${(adjustedX / width) * 100}%`,
            top: `${(adjustedY / height) * 100}%`,
            zIndex: 10 + orbitIndex,
            orbitIndex,
            angleOffset: angle,
          },
        });

        idCounter++;
      }
    });

    return newProfiles;
  };

  // Animation loop for subtle orbital movement
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime((prev) => prev + 0.01);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    const updateContainerSize = (): void => {
      const maxSize = Math.min(
        window.innerWidth * 0.8,
        window.innerHeight * 0.7,
        700
      );
      setContainerSize({
        width: maxSize,
        height: maxSize,
      });
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  // Regenerate profiles when container size changes
  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      setProfiles(
        generateOrbitalProfiles(containerSize.width, containerSize.height)
      );
    }
  }, [containerSize]);

  const getProfileSize = (orbitIndex: number): number => {
    const baseSizes = [65, 55, 45]; // Larger profiles on outer orbits
    return baseSizes[orbitIndex] || 50;
  };

  if (!isMounted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="min-h-screen  flex flex-col items-center justify-center p-8">
        <SecondHeading
          title="Who We Spoke To"
          className="max-w-[300px]"
          textColor="text-neutral-800"
        />
        {/* Orbital Container */}
        <div className="relative">
          {/* Orbital rings background */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0.8, 0.6, 0.4].map((scale, index) => (
              <div
                key={index}
                className="absolute rounded-full border border-blue-300/20"
                style={{
                  width: `${containerSize.width * scale}px`,
                  height: `${containerSize.height * scale}px`,
                }}
              />
            ))}

            {/* Center point */}
            <div className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />
          </div>

          {/* Profile Container */}
          <div
            className="relative"
            style={{
              width: `${containerSize.width}px`,
              height: `${containerSize.height}px`,
            }}
          >
            {profiles.map((profile: Profile) => {
              const profileSize: number = getProfileSize(
                profile.position.orbitIndex
              );

              // Calculate subtle animation offset
              const orbitSpeed =
                [0.5, 0.8, 1.2][profile.position.orbitIndex] || 1;
              const animatedAngle =
                profile.position.angleOffset + animationTime * orbitSpeed * 0.1;

              // Recalculate position with animation
              const radius = [
                containerSize.width * 0.4,
                containerSize.width * 0.3,
                containerSize.width * 0.2,
              ][profile.position.orbitIndex];

              const centerX = containerSize.width / 2;
              const centerY = containerSize.height / 2;
              const animatedX = centerX + Math.cos(animatedAngle) * radius;
              const animatedY = centerY + Math.sin(animatedAngle) * radius;

              return (
                <div
                  key={profile.id}
                  className={`absolute rounded-full overflow-hidden transition-all duration-300 cursor-pointer group ${
                    isHovered === profile.id
                      ? "scale-125 z-30"
                      : "hover:scale-110 hover:z-20"
                  }`}
                  style={{
                    width: `${profileSize}px`,
                    height: `${profileSize}px`,
                    left: `${(animatedX / containerSize.width) * 100}%`,
                    top: `${(animatedY / containerSize.height) * 100}%`,
                    transform: `translate(-50%, -50%)`,
                    zIndex:
                      isHovered === profile.id ? 30 : profile.position.zIndex,
                  }}
                  onMouseEnter={() => setIsHovered(profile.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {/* Orbital glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Profile border with orbit-specific colors */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                      profile.position.orbitIndex === 0
                        ? "border-blue-400 group-hover:border-blue-300"
                        : profile.position.orbitIndex === 1
                        ? "border-purple-400 group-hover:border-purple-300"
                        : "border-cyan-400 group-hover:border-cyan-300"
                    }`}
                  />

                  {/* Profile Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={profile.user.image}
                      alt={profile.user.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />

                    {/* Fallback icon */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <User className="w-1/2 h-1/2 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profile Info Tooltip */}
        {isHovered && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
            <div className="bg-white backdrop-blur-md text-gray-800 px-6 py-4 rounded-xl border border-white/20 shadow-2xl">
              <div className="text-lg font-semibold">
                {profiles.find((p) => p.id === isHovered)?.user.name}
              </div>
              <div className="text-gray-300 italic text-xs mt-1">
                {profiles.find((p) => p.id === isHovered)?.user.quote}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrbitalProfiles;

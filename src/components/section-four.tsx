"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Numbers row animation (desktop only)
      if (numbersRef.current) {
        const numbers = numbersRef.current.querySelectorAll("span[class*='text-4xl']");
        const lines = numbersRef.current.querySelectorAll("span[class*='border-t']");

        gsap.fromTo(
          Array.from(numbers),
          {
            opacity: 0,
            scale: 0,
            rotation: 180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: numbersRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          Array.from(lines),
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.5,
            scrollTrigger: {
              trigger: numbersRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Steps animation
      const stepCards = stepsRef.current?.children;
      if (stepCards) {
        gsap.fromTo(
          Array.from(stepCards),
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Add hover animations for step cards
        Array.from(stepCards).forEach((step) => {
          const stepElement = step as HTMLElement;
          const card = stepElement.querySelector('.group');
          
          if (card) {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, {
                y: -15,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Animate the step number on mobile
              const mobileNumber = stepElement.querySelector('span[class*="text-3xl"]');
              if (mobileNumber) {
                gsap.to(mobileNumber, {
                  scale: 1.2,
                  rotation: 10,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Reset the step number on mobile
              const mobileNumber = stepElement.querySelector('span[class*="text-3xl"]');
              if (mobileNumber) {
                gsap.to(mobileNumber, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            });
          }
        });
      }

      // Highlight active step animation
      if (numbersRef.current) {
        const numbers = numbersRef.current.querySelectorAll("span[class*='text-4xl']");
        
        ScrollTrigger.create({
          trigger: stepsRef.current,
          start: "top 60%",
          end: "bottom 40%",
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.floor(progress * 3);
            
            numbers.forEach((number, index) => {
              if (index <= activeIndex) {
                gsap.to(number, {
                  color: "#ef4444", // red-500
                  scale: 1.1,
                  duration: 0.3,
                });
              } else {
                gsap.to(number, {
                  color: "#1f2937", // gray-800
                  scale: 1,
                  duration: 0.3,
                });
              }
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#dfdfdf] py-25 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            How to Install Our App
          </h1>
          <p className="text-sm sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Numbers Row (Desktop Only) */}
        <div ref={numbersRef} className="hidden md:flex items-center justify-center mb-12">
          <span className="flex-1 border-t border-transparent"></span>
          <span className="text-4xl lg:text-5xl font-bold text-red-500 mx-4 lg:mx-6">01</span>
          <span className="flex-1 border-t border-gray-400 px-4 lg:px-5"></span>

          <span className="text-4xl lg:text-5xl font-bold text-gray-800 mx-4 lg:mx-6">02</span>
          <span className="flex-1 border-t border-gray-400 px-4 lg:px-5"></span>

          <span className="text-4xl lg:text-5xl font-bold text-gray-800 mx-4 lg:mx-6">03</span>
          <span className="flex-1 border-t border-transparent"></span>
        </div>

        {/* Steps Section */}
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Step 01 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-red-500 mb-3 sm:mb-4">01</span>
            <div
              className="group border-0 rounded-[20px] bg-[#e0e0e0] 
                         shadow-[5px_5px_18px_#808080,-5px_-5px_18px_#ffffff] 
                         hover:shadow-[inset_5px_5px_18px_#808080,inset_-5px_-5px_18px_#ffffff]
                         transition-all duration-400 ease-in-out
                         p-5 sm:p-8 flex flex-col justify-center items-center"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Download</h3>
              <p className="text-sm sm:text-base text-gray-600">Open Play Store or App Store</p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">02</span>
            <div
              className="group border-0 rounded-[20px] bg-[#e0e0e0] 
                         shadow-[5px_5px_18px_#808080,-5px_-5px_18px_#ffffff] 
                         hover:shadow-[inset_5px_5px_18px_#808080,inset_-5px_-5px_18px_#ffffff]
                         transition-all duration-400 ease-in-out
                         p-5 sm:p-8 flex flex-col justify-center items-center"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Install App</h3>
              <p className="text-sm sm:text-base text-gray-600">The app will install automatically.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">03</span>
            <div
              className="group border-0 rounded-[20px] bg-[#e0e0e0] 
                         shadow-[5px_5px_18px_#808080,-5px_-5px_18px_#ffffff] 
                         hover:shadow-[inset_5px_5px_18px_#808080,inset_-5px_-5px_18px_#ffffff]
                         transition-all duration-400 ease-in-out
                         p-5 sm:p-8 flex flex-col justify-center items-center"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Ready to Use</h3>
              <p className="text-sm sm:text-base text-gray-800">Sign up or log in to start exploring!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
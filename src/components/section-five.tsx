"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectionFivePhone1, sectionFivePhone2 } from "@/assets"
import { Button } from "@/components/ui/button"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

export default function SectionFive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const phone1Ref = useRef<HTMLImageElement>(null);
  const phone2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - fade in from top
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph animation - fade in from left
      gsap.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button animation - scale in with bounce
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.6,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Phone images slide up from 500px below
      gsap.fromTo(
        phone2Ref.current,
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        phone1Ref.current,
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Phone hover animations
      if (phone1Ref.current) {
        phone1Ref.current.addEventListener("mouseenter", () => {
          gsap.to(phone1Ref.current, {
            scale: 1.05,
            rotation: 2,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        phone1Ref.current.addEventListener("mouseleave", () => {
          gsap.to(phone1Ref.current, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      if (phone2Ref.current) {
        phone2Ref.current.addEventListener("mouseenter", () => {
          gsap.to(phone2Ref.current, {
            scale: 1.05,
            rotation: -2,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        phone2Ref.current.addEventListener("mouseleave", () => {
          gsap.to(phone2Ref.current, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#dfdfdf] w-full flex items-center justify-center">
      <div className="h-auto md:w-[95vw] md:max-w-[1200px] w-full lg:h-170 bg-[#ff5349] rounded-4xl overflow-hidden pt-10 relative">
        <div className="container mx-auto px-6 py-12">
          {/* Grid for desktop, stack text+button above images for mobile */}
          <div className="flex flex-col lg:flex-col">
            {/* Text + Button */}
            <div ref={contentRef} className="space-y-8 text-center lg:text-left z-10 relative">
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Be the Reason
                <br />
                Someone Smiles Today!
              </h1>

              <p 
                ref={paragraphRef}
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Your generosity can change lives — every donation brings hope,
                support, and a brighter future. Give today and make a difference!
              </p>

              <Button
                ref={buttonRef}
                size="lg"
                className="cursor-pointer z-20 bg-white text-red-500 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Donate Now
              </Button>
            </div>

            {/* Images (absolutely positioned, half visible) */}
            <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 overflow-visible">
              <Image
                ref={phone2Ref}
                src={sectionFivePhone2}
                alt="Phone mockup 2"
                className="rounded-4xl w-40 sm:w-60 md:w-72 lg:w-90 h-auto relative z-0"
              />
              <Image
                ref={phone1Ref}
                src={sectionFivePhone1}
                alt="Phone mockup 1"
                className="rounded-4xl w-44 sm:w-64 md:w-80 lg:w-100 h-auto -mt-12 md:-mt-16 lg:-mt-50 relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
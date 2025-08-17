"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  camera,
  fire,
  lock,
  planetEarth,
  RealTimeChat,
  suitcase,
} from "@/assets";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      span: "🔥",
      title: "Seamless Connections",
      description:
        "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      span: "📸",
      title: "Share Your Story",
      description:
        "Upload photos, videos, and updates to let the world know what's happening in your life.",
    },
    {
      span: "💬",
      title: "Real-Time Chat",
      description:
        "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
    },
    {
      span: "🔒",
      title: "Privacy First",
      description:
        "Your data, your control. We prioritize your privacy with world-class security.",
    },
    {
      span: "🌍",
      title: "Discover & Explore",
      description:
        "Find trending content, join communities, and follow pages that match your interests.",
    },
    {
      span: "💼",
      title: "Grow Your Business",
      description:
        "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
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
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Add hover animations for each card
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -10,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className=" bg-[#e0e0e0] xl:pt-36 pt-40 pb-20  px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features That Keep You Hooked!
          </h1>
          <p className="text-lg font-semibold">
            Meet, Chat, Share - Anytime, Anywhere!
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 rounded-[20px] bg-[#e0e0e0] 
                         shadow-[5px_5px_18px_#808080,-5px_-5px_18px_#ffffff] 
                         hover:shadow-[inset_5px_5px_18px_#808080,inset_-5px_-5px_18px_#ffffff]
                         transition-all duration-400 ease-in-out"
            >
              <CardContent className="py-2 text-center">
                <div
                  className="flex items-center justify-center gap-2 mb-3 
                             transform transition-all duration-400 ease-in-out
                             group-hover:scale-95"
                >
                  <h3
                    className="text-xl font-semibold text-gray-900 
                               transition-all duration-400 ease-in-out group-hover:scale-95"
                  >
                    <span className="text-2xl">{feature.span}</span>
                    {feature.title}
                  </h3>
                </div>
                <p
                  className="leading-relaxed  
                             transition-all duration-400 ease-in-out group-hover:scale-95"
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
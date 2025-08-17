"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { logo, phone1 } from "@/assets";

gsap.registerPlugin(ScrollTrigger);

export default function SectionOne() {
  const logoRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLHeadingElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const seamlessRef = useRef<HTMLDivElement>(null);
  const discoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({ paused: true });

    gsap.set([logoRef.current, logoTextRef.current, phoneRef.current, seamlessRef.current, discoverRef.current, buttonRef.current, paragraphRef.current], {
      opacity: 0,
    });

    gsap.set(logoRef.current, { scale: 0.5, y: -30 });
    gsap.set(logoTextRef.current, { x: 100 });
    gsap.set(phoneRef.current, { x: 100, scale: 0.8 });
    gsap.set(seamlessRef.current, { scale: 0.8, y: -20 });
    gsap.set(discoverRef.current, { scale: 0.8, y: 20 });
    gsap.set(buttonRef.current, { scale: 0.8, y: 20 });

    const headingLines = headingRef.current?.querySelectorAll('h1');
    if (headingLines) {
      gsap.set(headingLines, { x: -100, opacity: 0 });
    }

    gsap.set(paragraphRef.current, { y: 30, opacity: 0 });

    tl.to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .to(logoTextRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.4")
      .to(phoneRef.current, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.3")
      .to(seamlessRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.5")
      .to(discoverRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.4");

    if (headingLines) {
      headingLines.forEach((line, index) => {
        tl.to(line, { opacity: 1, x: 0, duration: 0.8, ease: "power2.inOut" }, index === 0 ? "-=0.3" : "-=0.5");
      });
    }

    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.5")
      .to(buttonRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.4");

    ScrollTrigger.create({
      trigger: logoRef.current,
      start: "top 85%",
      onEnter: () => tl.play(),
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="lg:h-160 bg-gradient-to-br from-red-400 to-red-500 px-4 -mb-20 lg:mb-0 ">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-full mb-6 pt-6">
            <div ref={logoRef}>
              <Image
                src={logo}
                alt="Logo"
                width={1000}
                height={1000}
                className="drop-shadow-lg w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
            </div>
            <h1
              ref={logoTextRef}
              className="text-lg sm:text-xl lg:text-3xl font-bold text-white ml-2 sm:ml-3"
            >
              Mybindle
            </h1>
          </div>

          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,500px)_minmax(250px,1fr)] xl:grid-cols-[500px_400px] gap-8 lg:gap-10">
            <div className="text-white space-y-4 lg:text-left">
              <div ref={headingRef}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay Connected
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay Social
                </h1>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay You
                </h1>
              </div>

              <div ref={paragraphRef}>
                <p className="text-sm sm:text-base text-left  text-white/90 max-w-lg space-y-0 text-base/2 leading-6 lg:mx-0  font-semibold">
                  A place where friendships grow, communities thrive, and
                  moments turn into unforgettable experiences. Whether you're
                  looking to reconnect with old friends, build new
                  relationships, or share what matters most to you — MyBindle is
                  your home on the internet.
                </p>
              </div>

              <Button
                ref={buttonRef}
                className="bg-white text-red-500 hover:bg-white/90 font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-md rounded-lg shadow-lg"
              >
                Get Started
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-end relative">
              <div
                ref={seamlessRef}
                className="absolute top-15 lg:left-0 sm:left-15 left-0 bg-white px-3 py-4 rounded-lg shadow-md flex z-20"
              >
                <h1 className="text-lg font-semibold">
                  🔥Seamless Connections
                </h1>
              </div>

              <div
                ref={discoverRef}
                className="absolute bottom-15 lg:right-0 sm:right-15 right-0 bg-white px-3 py-4 rounded-lg shadow-md flex z-20"
              >
                <h1 className="text-lg font-semibold">🌍 Discover & Explore</h1>
              </div>

              <Image
                ref={phoneRef}
                src={phone1}
                alt="iPhone"
                width={500}
                height={500}
                style={{
                  filter: "drop-shadow(20px 0 1.5rem black)",
                }}
                className="w-70 sm:w-80 lg:w-[22rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
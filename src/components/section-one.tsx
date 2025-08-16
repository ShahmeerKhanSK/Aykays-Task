import { Button } from "./ui/button";
import Image from "next/image";
import { phone1, logo } from "@/assets/index.js";

export default function SectionOne() {
  return (
    <section className="lg:h-160 bg-gradient-to-br from-red-400 to-red-500 px-4 -mb-20 lg:mb-0 ">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-full mb-6 pt-6">
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="drop-shadow-lg w-10 h-10 sm:w-12 sm:h-12"
              priority
            />
            <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-white ml-2 sm:ml-3">
              Mybindle
            </h1>
          </div>

          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,500px)_minmax(250px,1fr)] xl:grid-cols-[500px_400px] gap-8 lg:gap-10">
            <div className="text-white space-y-4 lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay Connected
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay Social
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Stay You!
                </h1>
              </div>

              <p className="text-sm sm:text-base  text-white/90 max-w-lg space-y-0 text-base/2 leading-6 lg:mx-0  font-semibold">
                A place where friendships grow, communities thrive, and moments
                turn into unforgettable experiences. Whether you're looking to
                reconnect with old friends, build new relationships, or share
                what matters most to you — MyBindle is your home on the
                internet.
              </p>

              <Button className="bg-white text-red-500 hover:bg-white/90 font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-md rounded-lg shadow-lg">
                Get Started
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="absolute top-15 lg:left-0 sm:left-15 left-0 bg-white px-3 py-4 rounded-lg shadow-md flex z-20">
                <h1 className="text-lg font-semibold">🔥Seamless Connections</h1>
              </div>

              <div className="absolute bottom-15 lg:right-0 sm:right-15 right-0 bg-white px-3 py-4 rounded-lg shadow-md flex z-20">
                <h1 className="text-lg font-semibold">  🌍 Discover & Explore
</h1>
              </div>

              <Image
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

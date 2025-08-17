import { appleStore, phoneSix, playStore } from "@/assets";
import Image from "next/image";
import { Button } from "./ui/button";

export default function SectionSeven() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div className="h-auto md:w-[95vw] md:max-w-[1400px] w-full xl:h-170 bg-[#ff5349] rounded-4xl  pt-10 relative px-6 sm:px-10 lg:px-20">
        <div className="container mx-auto py-12 grid grid-cols-1 max-[1207px]:grid-cols-1 xl:grid-cols-[auto_1fr] gap-10 xl:gap-0">
          {/* Left Content */}
          <div className="space-y-6 text-center xl:text-left">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Join the Fun – Download
              <br />
              MyBindle Now!
            </h1>

            <p className="text-sm sm:text-lg xl:text-xl text-white/90 leading-relaxed">
              Your Social Network, Your Way <br />
              Download MyBindle Now and Be a Part <br />
              of a Community That’s Always Evolving!
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-4">
              <Button className="flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-4 sm:py-6 shadow-md hover:scale-105 transition-transform">
                <Image src={appleStore} alt="App Store" width={24} height={24} />
                <div className="text-left leading-none">
                  <p className="text-[8px] sm:text-[10px] text-gray-600">
                    DOWNLOAD ON THE
                  </p>
                  <p className="text-sm sm:text-base text-black">App Store</p>
                </div>
              </Button>

              <Button className="flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-4 sm:py-6 shadow-md hover:scale-105 transition-transform">
                <Image src={playStore} alt="Google Play" width={24} height={24} />
                <div className="text-left leading-none">
                  <p className="text-[8px] sm:text-[10px] text-gray-600">
                    Get it on
                  </p>
                  <p className="text-sm sm:text-base text-black">Google Play</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Phones */}
          <div className="relative flex justify-center xl:block min-h-[350px] sm:min-h-[450px] md:min-h-[500px] xl:min-h-[500px]">
            {/* Phone 1 */}
            <Image
              src={phoneSix}
              alt="Phone mockup right"
              className="absolute w-[60%] sm:w-[50%] md:w-[45%] xl:w-auto xl:-top-5 xl:-right-40 right-2 top-0"
            />
            {/* Phone 2 */}
            <Image
              src={phoneSix}
              alt="Phone mockup left"
              className="absolute w-[60%] sm:w-[50%] md:w-[45%] xl:w-auto xl:top-50 xl:-left-50 left-2 top-24 sm:top-32 md:top-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { phone1, phoneSix, sectionFivePhone1, sectionFivePhone2 } from "@/assets"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SectionSeven() {
  return (
    <div className="bg-[#dfdfdf]">
      <div className="h-auto lg:h-170 bg-[#ff5349] rounded-4xl overflow-hidden pt-10 relative">
        <div className="container mx-auto px-6 py-12">
          {/* Grid for desktop, stack text+button above images for mobile */}
          <div className="flex flex-col lg:flex-col">
            {/* Text + Button */}
            <div className="space-y-8 text-center lg:text-left z-10 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Be the Reason
                <br />
                Someone Smiles Today!
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Your generosity can change lives — every donation brings hope,
                support, and a brighter future. Give today and make a difference!
              </p>

              <Button
                size="lg"
                className=" z-20 bg-white text-red-500 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Donate Now
              </Button>
            </div>

            {/* Images (absolutely positioned, half visible) */}
            <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 overflow-visible">
              <Image
                src={phoneSix}
                alt="Phone mockup 2"
                className="rounded-4xl w-40 sm:w-60 md:w-72 lg:w-90 h-auto relative z-0"
              />
              <Image
                src={phone1}
                alt="Phone mockup 1"
                className="rounded-4xl w-50 sm:w-75 md:w-100 lg:w-110 h-auto -mt-12 md:-mt-16 lg:-mt-50 relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

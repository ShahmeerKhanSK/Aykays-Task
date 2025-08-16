"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"

export default function SectionSix() {
  const [showMore, setShowMore] = useState(false)

  const cardStyle = {
    borderRadius: "20px",
    background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
    boxShadow: "5px 5px 10px #afafaf, -5px -5px 10px #ffffff",
  }

  const testimonials = [
    {
      id: 1,
      text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
      name: "Emily R",
      location: "USA",
      avatar: "/woman-profile.png",
    },
    {
      id: 2,
      text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
      name: "Amit K",
      location: "India",
      avatar: "/man-profile.png",
    },
    {
      id: 3,
      text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
      name: "Sophie M",
      location: "UK",
      avatar: "/blonde-woman-profile.png",
    },
    {
      id: 4,
      text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
      name: "Javier L",
      location: "Spain",
      avatar: "/man-profile-beard.png",
    },
    {
      id: 5,
      text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
      name: "Lucas T",
      location: "Brazil",
      avatar: "/young-man-profile.png",
    },
    {
      id: 6,
      text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
      name: "Nora S",
      location: "Canada",
      avatar: "/brunette-woman-profile.png",
    },
    {
      id: 7,
      text: "The analytics dashboard helped me understand my audience better than ever. My content strategy has improved dramatically since joining this platform!",
      name: "Maria G",
      location: "Mexico",
      avatar: "/woman-profile.png",
    },
    {
      id: 8,
      text: "As a content creator, this platform gives me all the tools I need. The monetization features are transparent and fair - exactly what I was looking for!",
      name: "David K",
      location: "Australia",
      avatar: "/man-profile.png",
    },
    {
      id: 9,
      text: "The community guidelines are actually enforced here! It's refreshing to be part of a platform that prioritizes user safety and meaningful connections.",
      name: "Sarah J",
      location: "Germany",
      avatar: "/woman-profile-glasses.png",
    },
  ]

  const displayedTestimonials = showMore ? testimonials : testimonials.slice(0, 6)

  return (
    <div className="min-h-screen bg-[#e0e0e0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          What Our Users Say
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between"
              style={cardStyle}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`${testimonial.name} profile`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show more button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-2 sm:py-3 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors bg-transparent text-sm sm:text-base"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
          </Button>
        </div>
      </div>
    </div>
  )
}

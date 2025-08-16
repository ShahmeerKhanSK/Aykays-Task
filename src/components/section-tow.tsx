import Image from "next/image"
import { camera, fire, lock, planetEarth, RealTimeChat, suitcase } from "@/assets"
import { Card, CardContent } from "@/components/ui/card"

export default function SectionTwo() {
  const features = [
    {
      emoji: fire,
      isImage: true,
      title: "Seamless Connections",
      description: "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      emoji: camera,
      isImage: true,
      title: "Share Your Story",
      description: "Upload photos, videos, and updates to let the world know what's happening in your life.",
    },
    {
      emoji: RealTimeChat,
      isImage: true,
      title: "Real-Time Chat",
      description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
    },
    {
      emoji: lock,
      isImage: true,
      title: "Privacy First",
      description: "Your data, your control. We prioritize your privacy with world-class security.",
    },
    {
      emoji: planetEarth,
      isImage: true,
      title: "Discover & Explore",
      description: "Find trending content, join communities, and follow pages that match your interests.",
    },
    {
      emoji: suitcase,
      isImage: true,
      title: "Grow Your Business",
      description: "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
    },
  ];

  const cardStyle = {
    borderRadius: "20px",
    background: "#e0e0e0",
    boxShadow: "5px 5px 10px #b8b8b8, -5px -5px 10px #ffffff",
  };

  return (
    <main className="min-h-screen bg-[#e0e0e0] xl:pt-36  pt-30 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features That Keep You Hooked!
          </h1>
          <p className="text-lg text-gray-600">Meet, Chat, Share - Anytime, Anywhere!</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 transition-shadow duration-200"
              style={cardStyle}
            >
              <CardContent className="py-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {feature.isImage && (
                    <Image src={feature.emoji} alt={feature.title} className="w-6 h-6" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="leading-relaxed text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

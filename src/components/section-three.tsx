import { twoPhones } from '@/assets';
import Image from 'next/image';
import React from 'react';

export default function SectionThree() {
    const cardStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
        boxShadow: '5px 5px 10px #afafaf, -5px -5px 10px #ffffff',
    };

    const features = [
        {
            emoji: '📱',
            title: 'Short Videos & Reels',
            description: 'Share engaging, bite-sized content that keeps everyone entertained.',
        },
        {
            emoji: '🔔',
            title: 'Smart Notifications',
            description: 'Stay updated on what matters without the noise.',
        },
        {
            emoji: '👥',
            title: 'Interest-Based Communities',
            description: 'Join groups and discussions that match your passion.',
        },
    ];

    const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
        <div
            className="flex items-start gap-4 py-5 px-5 transition-shadow duration-200"
            style={cardStyle}
        >
            <div className="text-2xl">{emoji}</div>
            <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#dfdfdf]">
            <div className="container mx-auto py-12 px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-15">
                
                {/* Left Side - Image */}
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src={twoPhones}
                        width={500}
                        height={500}
                        alt="Two Phones"
                        className="w-64 sm:w-80 md:w-[28rem] h-auto"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 max-w-md text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                        Where Every Click Sparks a Connection!
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-12">
                        A small act of kindness today can create a lifetime of impact for someone in need.
                        Give from the heart and change a life!
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

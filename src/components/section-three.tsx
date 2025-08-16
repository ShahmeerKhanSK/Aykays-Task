import { twoPhones } from '@/assets';
import Image from 'next/image';
import React from 'react';

export default function SectionThree() {
    const features = [
        {
            emoji: '📽️',
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
            className="group border-0 rounded-[20px] bg-[#e0e0e0] 
                       shadow-[5px_5px_18px_#808080,-5px_-5px_18px_#ffffff] 
                       hover:shadow-[inset_5px_5px_18px_#808080,inset_-5px_-5px_18px_#ffffff]
                       transition-all duration-400 ease-in-out
                       flex items-start gap-4 py-5 px-5"
        >
            <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                    <span className="mr-2">{emoji}</span>
                    {title}
                </h3>
                <p className=" text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );

    return (
        <main className=" bg-[#dfdfdf]">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-4 px-3">

                {/* Left Side - Image */}
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src={twoPhones}
                        width={500}
                        height={500}
                        alt="Two Phones"
                        className="w-[35rem] h-auto"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 max-w-xl text-left">
                    <h1 className="md:text-4xl xl:text-5xl sm:text-4xl text-3xl font-bold text-foreground mb-4 leading-tight">
                        Where Every Click <br /> Sparks a Connection!
                    </h1>
                    <p className=" text-sm sm:text-base leading-relaxed mb-12">
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

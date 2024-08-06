"use client";

import { useState } from "react";

export default function FAQSection() {
    return (
        <div>
            <Tile
                title="Will influencer marketing give me good ROI?"
                description="Yes, if done correctly. Good Creator Co has the largest creator ecosystem, with close to 500,000 registered creators, and expertise from all of our group brands, such as Plixxo, Winkl, MissMalini, Vidooly, and BulBul TV. Combined, we have figured out the code for success! Our smart influencer campaigns can drive and guarantee results."
            />
            <Tile
                title="What is GCC's approach to creating influencer strategies?"
                description="Unlike crude approaches such as simply creating a list on a spreadsheet, our approach is methodical. At Good Creator Co., we take the time to understand the product or service, the target audience, and their core motivations. We analyze social media for content that caters to the target audience, and then we create a strategy and influencer concept ideas that are both engaging and organic. Research, strategy, and idea generation come before compiling a list of influencers and budgeting."
            />
            <Tile
                title="What kind of campaign execution can I expect from GCC?"
                description="For full-service campaigns, our brand solutions team will take care of everything that needs to be done. Each brand solutions team is led by a senior strategist, and includes content strategists to ensure quality content, as well as influencer managers to ensure the best costs and smooth execution."
            />
            <Tile
                title="How can programmatic influencer campaigns guarantee results?"
                description="The KPI and budget for each campaign are decided beforehand, and the campaign is driven at scale until the KPI target is achieved. The best part is that targets are achieved within 10-15 days."
            />
            <Tile
                title="Can I generate sales through influencer marketing?"
                description="Yes, it is possible to drive sales through influencer marketing. This can be achieved by creating focused content on e-commerce, such as shopping inspirations and detailed walkthroughs of products. Additionally, with Good Creator Co's programmatic influencer marketing, you can even get guaranteed sales!"
            />
        </div>
    );
}

function Tile({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="accordion py-4 border-t border-gray-400 last:border-b">
            <button
                className="flex items-center justify-between text-left w-full gap-x-1 text-xl font-semibold"
                onClick={handleClick}
            >
                <span>{title}</span>
                <svg
                    className="shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition-transform ease-out ${
                            isOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition-transform ease-out ${
                            isOpen && "!rotate-180"
                        }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all text-gray-900 text-base ${
                    isOpen
                        ? "mt-2 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <p className="overflow-hidden">{description}</p>
            </div>
        </div>
    );
}

import Button from "@/components/common/Button";
import Image from "next/image";

export default function FeatureSection() {
    return (
        <div>
            <Card
                buttonText="Search Influencers"
                description="Search for India's top influencers, ambassadors, creators, or affiliates on your preferred social media platform, using advanced filters."
                image="/feature_1.png"
                title="Influencer Discovery"
            />
            <Card
                buttonText="Download Extension"
                description="Explore advanced creator insights effortlessly with a comprehensive browser extension. Gain valuable information about engagement, average likes and comments, and follower ratio."
                image="/feature_2.png"
                title="Extension"
            />
            <Card
                buttonText="Generate Report"
                description="With our powerful platform, you can easily analyze and track real-time reports of your current and past campaigns in less than two minutes."
                image="/feature_3.png"
                title="Campaign Reporting"
            />
        </div>
    );
}

function Card({ image, title, description, buttonText }) {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="h-96 inline-flex items-center justify-center bg-secondary overflow-hidden lg:flex-1">
                <Image
                    alt={title}
                    src={image}
                    width="1000"
                    height="1000"
                    className="object-contain h-full transition-transform hover:scale-110"
                />
            </div>
            <div className="lg:flex-1 px-5 py-10">
                <h3 className="mb-4 text-xl text-primary font-semibold">
                    {title}
                </h3>
                <p className="mb-8 text-lg text-gray-800">{description}</p>
                <Button size="lg" className="lg:w-fit">
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}

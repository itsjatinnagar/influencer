import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h2 className="text-2xl text-primary text-center">
                        <span>Powerful tools for</span>
                        <span className="block font-semibold">
                            Impactful campaigns
                        </span>
                    </h2>
                </div>
                <div>
                    <FeatureCard
                        buttonText="Search Influencers"
                        description="Search for India's top influencers, ambassadors, creators, or affiliates on your preferred social media platform, using advanced filters."
                        image="/feature_1.png"
                        title="Influencer Discovery"
                    />
                    <FeatureCard
                        buttonText="Download Extension"
                        description="Explore advanced creator insights effortlessly with a comprehensive browser extension. Gain valuable information about engagement, average likes and comments, and follower ratio."
                        image="/feature_2.png"
                        title="Extension"
                    />
                    <FeatureCard
                        buttonText="Generate Report"
                        description="With our powerful platform, you can easily analyze and track real-time reports of your current and past campaigns in less than two minutes."
                        image="/feature_3.png"
                        title="Campaign Reporting"
                    />
                </div>
            </div>
        </section>
    );
}

import CreatorCard from "./CreatorCard";

export default function CreatorSection() {
    return (
        <section className="px-5 py-8">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h2 className="text-2xl text-primary text-center">
                        <span>Best where it matters</span>
                        <span className="block font-semibold">The most</span>
                    </h2>
                </div>
            </div>
            <div>
                <CreatorCard
                    description="With over 500,000 registered creators on the platform and access to data for over 2 million creators, finding the right influencer, connecting and collaborating has never been easier."
                    image="/creator_1.png"
                    title="Largest verified pool of creators in India"
                />
                <CreatorCard
                    description="Our state-of-the-art fraud detection and content verification system utilizes advanced artificial intelligence technology to safeguard your campaigns with low quality content, fake web traffic, etc"
                    image="/creator_2.png"
                    title="Fraud detection & content verification system"
                />
                <CreatorCard
                    description="With historic data from over 5000 campaigns for more than 100 brands, customised strategies and data-driven influencer selection. Your campaigns will be optimised to give you the best results for your spending."
                    image="/creator_3.png"
                    title="ROI-Driven Campaigns"
                />
                <CreatorCard
                    description="Drive revenue to your Shopify store and gain valuable insights with our seamless integration of Shopify and Google Analytics."
                    image="/creator_4.png"
                    title="Integrations to make your tracking easy"
                />
            </div>
        </section>
    );
}

import Image from "next/image";

export default function CreatorSection() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-y-10">
            <Card
                description="With over 500,000 registered creators on the platform and access to data for over 2 million creators, finding the right influencer, connecting and collaborating has never been easier."
                image="/creator_1.png"
                title="Largest verified pool of creators in India"
            />
            <Card
                description="Our state-of-the-art fraud detection and content verification system utilizes advanced artificial intelligence technology to safeguard your campaigns with low quality content, fake web traffic, etc"
                image="/creator_2.png"
                title="Fraud detection & content verification system"
            />
            <Card
                description="With historic data from over 5000 campaigns for more than 100 brands, customised strategies and data-driven influencer selection. Your campaigns will be optimised to give you the best results for your spending."
                image="/creator_3.png"
                title="ROI-Driven Campaigns"
            />
            <Card
                description="Drive revenue to your Shopify store and gain valuable insights with our seamless integration of Shopify and Google Analytics."
                image="/creator_4.png"
                title="Integrations to make your tracking easy"
            />
        </div>
    );
}

function Card({ image, title, description }) {
    return (
        <div className="flex flex-col items-center gap-2 md:flex-row">
            <Image
                alt={title}
                src={image}
                width="600"
                height="600"
                className="max-w-80 w-full"
            />
            <div>
                <h3 className="mb-3 text-xl text-primary sm:text-3xl lg:text-5xl">
                    {title}
                </h3>
                <p className="text-sm text-gray-800 sm:text-lg lg:text-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
}

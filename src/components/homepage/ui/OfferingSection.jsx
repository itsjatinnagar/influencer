import Button from "@/components/common/Button";
import Image from "next/image";

export default function OfferingSection() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Card
                buttonText="Submit Requirement"
                description="Customized strategy for all objectives, planned & executed by our dedicated teams"
                image="/offering_1.jpeg"
                title="Influencer Marketing"
            />
            <Card
                buttonText="Submit Requirement"
                description="Optimise and scale your influencer marketing with our suite of professional products"
                image="/offering_2.jpeg"
                title="Studio Shoot"
            />
        </div>
    );
}

function Card({ image, title, description, buttonText }) {
    return (
        <div className="max-w-96 bg-accent rounded-3xl overflow-hidden">
            <Image
                alt={title}
                src={image}
                width="1000"
                height="600"
                className="object-fill h-64"
            />
            <div className="p-5">
                <h3 className="mb-4 text-xl text-primary font-semibold">
                    {title}
                </h3>
                <p className="mb-4 h-full text-lg text-gray-800">
                    {description}
                </p>
                <Button className="mt-auto">{buttonText}</Button>
            </div>
        </div>
    );
}

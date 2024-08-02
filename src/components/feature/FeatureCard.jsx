import Image from "next/image";
import Button from "../ui/Button";

export default function FeatureCard({ image, title, description, buttonText }) {
    return (
        <div className="flex flex-col">
            <div className="h-96 inline-flex items-center justify-center bg-yellow-50">
                <Image alt={title} src={image} width="1000" height="1000" />
            </div>
            <div className="px-5 py-10">
                <h3 className="mb-4 text-xl text-blue-900 font-semibold">
                    {title}
                </h3>
                <p className="mb-8 text-lg text-gray-900">{description}</p>
                <Button size="lg">{buttonText}</Button>
            </div>
        </div>
    );
}

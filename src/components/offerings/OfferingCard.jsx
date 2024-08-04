import Image from "next/image";
import Button from "../ui/Button";

export default function OfferingCard({
    image,
    title,
    description,
    buttonText,
}) {
    return (
        <div className="bg-accent rounded-3xl overflow-hidden">
            <Image
                alt={title}
                src={image}
                width="1000"
                height="667"
                className="object-fill"
            />
            <div className="p-5">
                <h3 className="mb-4 text-xl text-primary font-semibold">
                    {title}
                </h3>
                <p className="mb-4 text-lg text-gray-800">{description}</p>
                <Button>{buttonText}</Button>
            </div>
        </div>
    );
}

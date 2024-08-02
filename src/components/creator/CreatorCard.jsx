import Image from "next/image";

export default function CreatorCard({ image, title, description }) {
    return (
        <div className="mb-12">
            <div className="mb-6">
                <Image alt={title} src={image} width="600" height="600" />
            </div>
            <div>
                <h3 className="mb-3 text-xl text-blue-900">{title}</h3>
                <p className="text-sm text-gray-900">{description}</p>
            </div>
        </div>
    );
}

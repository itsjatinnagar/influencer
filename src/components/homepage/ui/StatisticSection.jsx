import Image from "next/image";

export default function StatisticSection() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-5 xl:gap-x-10">
            <Card
                title="550k+"
                subtitle="content creators"
                image="/statistic_1.svg"
            />
            <Card
                title="125m+"
                subtitle="audiences tracked"
                image="/statistic_2.svg"
            />
            <Card
                title="135m+"
                subtitle="posts measured"
                image="/statistic_3.svg"
            />
        </div>
    );
}

function Card({ image, title, subtitle }) {
    return (
        <div className="flex items-center justify-center gap-x-4">
            <Image
                alt={title}
                src={image}
                width="60"
                height="60"
                className="h-16"
            />
            <div className="text-primary flex-shrink-0">
                <h3 className="text-5xl font-bold">{title}</h3>
                <p className="text-xl uppercase">{subtitle}</p>
            </div>
        </div>
    );
}

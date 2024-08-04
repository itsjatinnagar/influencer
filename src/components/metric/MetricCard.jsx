import Image from "next/image";

export default function MetricCard({ children, image, badge, logo }) {
    return (
        <div className="rounded-2xl overflow-hidden flex bg-accent">
            <div className="w-1/2">
                <Image
                    alt={badge}
                    src={image}
                    width="600"
                    height="600"
                    className="h-full object-cover"
                />
            </div>
            <div className="w-1/2 px-3 py-10 inline-flex items-center flex-col gap-y-8">
                <div className="mb-8 relative self-stretch">
                    <h3 className="absolute -right-3 px-4 py-1 bg-primary text-primary-foreground text-[9px] font-semibold rounded-l-md">
                        {badge}
                    </h3>
                </div>
                {children}
                <Image
                    alt={badge}
                    src={logo}
                    width="200"
                    height="200"
                    className="w-20"
                />
            </div>
        </div>
    );
}

import MetricCard from "./MetricCard";

export default function MetricSection() {
    return (
        <section className="px-5 py-12 bg-secondary/70">
            <div className="container mx-auto flex flex-col gap-y-5">
                <MetricCard
                    badge="Lifestyle"
                    image="/metric_1.jpeg"
                    logo="/metric_logo_1.png"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">303</span>
                        <span className="block font-medium">
                            content pieces
                        </span>
                    </p>
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">INR 498</span>
                        <span className="block font-medium">per post</span>
                    </p>
                </MetricCard>
                <MetricCard
                    badge="Beauty & Personal Care"
                    image="/metric_2.jpeg"
                    logo="/metric_logo_2.png"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">8000</span>
                        <span className="block font-medium">
                            website sessions
                        </span>
                    </p>
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">INR 5</span>
                        <span className="block font-medium">
                            cost per session
                        </span>
                    </p>
                </MetricCard>
                <MetricCard
                    badge="Beauty & Personal Care"
                    image="/metric_3.png"
                    logo="/metric_logo_3.png"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">50%</span>
                        <span className="block font-medium">
                            decrease in cost per session
                        </span>
                    </p>
                </MetricCard>
                <MetricCard
                    badge="Beauty & Personal Care"
                    image="/metric_4.png"
                    logo="/metric_logo_4.webp"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">1.73M</span>
                        <span className="block font-medium">reach</span>
                    </p>
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">40</span>
                        <span className="block font-medium">
                            content pieces
                        </span>
                    </p>
                </MetricCard>
                <MetricCard
                    badge="Beauty & Personal Care"
                    image="/metric_5.png"
                    logo="/metric_logo_5.webp"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">INR 471</span>
                        <span className="block font-medium">
                            average order value
                        </span>
                    </p>
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">1.2%</span>
                        <span className="block font-medium">conversion</span>
                    </p>
                </MetricCard>
                <MetricCard
                    badge="Lifestyle"
                    image="/metric_6.png"
                    logo="/metric_logo_6.png"
                >
                    <p className="text-primary text-center">
                        <span className="text-2xl font-bold">10.3M</span>
                        <span className="block font-medium">total reach</span>
                    </p>
                </MetricCard>
            </div>
        </section>
    );
}

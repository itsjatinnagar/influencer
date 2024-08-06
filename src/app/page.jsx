import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import FAQSection from "@/components/homepage/ui/FAQSection";
import FeatureSection from "@/components/homepage/ui/FeatureSection";
import OfferingSection from "@/components/homepage/ui/OfferingSection";
import SectionHeader from "@/components/homepage/ui/SectionHeader";
import StatisticSection from "@/components/homepage/ui/StatisticSection";

export default function Page() {
    return (
        <div>
            <section className="mx-auto px-5 py-20 max-w-5xl md:w-4/5 flex flex-col items-center justify-center gap-y-6">
                <Heading>
                    <span className="font-normal">Influencer Marketing</span>
                    <span className="text-primary">which drives revenue</span>
                </Heading>
                <p className="text-sm md:text-lg xl:text-2xl text-center text-gray-800">
                    India's largest influencer network and the most advanced
                    influencer marketing platform. Collaborate directly with
                    over 500,000 creators and drive tangible results and upto 5x
                    better RoAS to scale your brand.
                </p>
                <Button className="w-min" size="lg">
                    Schedule a free consultation
                </Button>
            </section>

            <section className="w-full px-5 py-20 bg-secondary">
                <SectionHeader
                    as="h2"
                    className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto w-4/5 font-normal text-primary"
                >
                    "Trusted by the online video industry for insights &
                    measurement"
                </SectionHeader>
                <StatisticSection />
            </section>

            <section className="px-5 py-12">
                <div className="mx-auto container">
                    <SectionHeader as="h2" className="text-primary">
                        <span className="font-normal">Our</span>
                        <span>offerings</span>
                    </SectionHeader>
                    <OfferingSection />
                </div>
            </section>

            <section className="py-12">
                <SectionHeader as="h2" className="flex-col text-primary">
                    <span className="font-normal">Powerful tools for</span>
                    <span>Impactful campaigns</span>
                </SectionHeader>
                <FeatureSection />
            </section>

            <section className="px-5 py-12 bg-secondary/70">
                <div className="mx-auto container">
                    <SectionHeader as="h2" className="text-primary">
                        FAQs
                    </SectionHeader>
                    <FAQSection />
                </div>
            </section>
        </div>
    );
}

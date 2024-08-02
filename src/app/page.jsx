import CreatorSection from "@/components/creator/CreatorSection";
import FeatureSection from "@/components/feature/FeatureSection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import MetricSection from "@/components/metric/MetricSection";
import OfferingSection from "@/components/offerings/OfferingSection";
import StatisticSection from "@/components/statistic/StatisticSection";
import TopBrand from "@/components/top_brand/TopBrand";

export default function Page() {
    return (
        <>
            <Header />
            <HeroSection />
            <TopBrand />
            <StatisticSection />
            <OfferingSection />
            <FeatureSection />
            <CreatorSection />
            <MetricSection />
        </>
    );
}

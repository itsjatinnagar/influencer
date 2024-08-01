import Hero from "@/components/hero/Hero";
import Navbar from "@/components/nav/Navbar";
import Statistics from "@/components/statistics/Statistics";
import TopBrand from "@/components/top_brand/TopBrand";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <TopBrand />
            <Statistics />
        </>
    );
}

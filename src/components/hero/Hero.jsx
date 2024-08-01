import Button from "../ui/Button";

export default function Hero() {
    return (
        <div className="px-5 py-20 flex items-center justify-center">
            <div className="mx-auto container max-w-2xl text-center">
                <h1 className="text-3xl sm:text-5xl font-extrabold inline-flex flex-col items-center justify-center text-center gap-y-2">
                    <span className="block font-normal">
                        Influencer Marketing
                    </span>
                    <span className="block">which drives revenue</span>
                </h1>
                <p className="mt-6 text-base text-center">
                    India's largest influencer network and the most advanced
                    influencer marketing platform. Collaborate directly with
                    over 500,000 creators and drive tangible results and upto 5x
                    better RoAS to scale your brand.
                </p>
                <Button className="mt-6 w-min" size="lg">
                    Schedule a free consultation
                </Button>
            </div>
        </div>
    );
}

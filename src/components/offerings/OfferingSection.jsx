import OfferingCard from "./OfferingCard";

export default function OfferingSection() {
    return (
        <section className="px-5 py-12">
            <div className="mx-auto container">
                <div className="mb-10">
                    <h2 className="text-2xl text-blue-900 text-center">
                        <span>Our </span>
                        <span className="font-semibold">offerings</span>
                    </h2>
                </div>
                <div>
                    <OfferingCard
                        buttonText="Submit Requirement"
                        description="Customized strategy for all objectives, planned & executed by our dedicated teams"
                        image="/offering_1.jpeg"
                        title="Influencer Marketing"
                    />
                </div>
            </div>
        </section>
    );
}

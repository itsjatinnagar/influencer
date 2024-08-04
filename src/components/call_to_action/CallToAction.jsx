import Button from "../ui/Button";

export default function CallToAction() {
    return (
        <section className="px-5 py-12">
            <div className="container mx-auto">
                <div className="p-10 bg-secondary text-primary rounded-3xl text-center shadow-lg">
                    <div className="flex flex-col gap-y-6">
                        <h3 className="text-2xl font-medium">
                            Ready to get started?
                        </h3>
                        <p className="text-sm">
                            Make the most of your influencer marketing program
                            with our all-in-one creator management platform.
                        </p>
                        <Button size="lg">Try Now For Free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

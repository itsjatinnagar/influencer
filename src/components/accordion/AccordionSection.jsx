import AccordionTile from "./AccordionTile";

export default function AccordionSection() {
    return (
        <section className="px-5 py-8 bg-secondary/70">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h2 className="text-2xl text-primary text-center">FAQs</h2>
                </div>
                <div>
                    <AccordionTile
                        title="Will influencer marketing give me good ROI?"
                        description="Yes, if done correctly. Good Creator Co has the largest creator ecosystem, with close to 500,000 registered creators, and expertise from all of our group brands, such as Plixxo, Winkl, MissMalini, Vidooly, and BulBul TV. Combined, we have figured out the code for success! Our smart influencer campaigns can drive and guarantee results."
                    />
                    <AccordionTile
                        title="What is GCC's approach to creating influencer strategies?"
                        description="Unlike crude approaches such as simply creating a list on a spreadsheet, our approach is methodical. At Good Creator Co., we take the time to understand the product or service, the target audience, and their core motivations. We analyze social media for content that caters to the target audience, and then we create a strategy and influencer concept ideas that are both engaging and organic. Research, strategy, and idea generation come before compiling a list of influencers and budgeting."
                    />
                    <AccordionTile
                        title="What kind of campaign execution can I expect from GCC?"
                        description="For full-service campaigns, our brand solutions team will take care of everything that needs to be done. Each brand solutions team is led by a senior strategist, and includes content strategists to ensure quality content, as well as influencer managers to ensure the best costs and smooth execution."
                    />
                    <AccordionTile
                        title="How can programmatic influencer campaigns guarantee results?"
                        description="The KPI and budget for each campaign are decided beforehand, and the campaign is driven at scale until the KPI target is achieved. The best part is that targets are achieved within 10-15 days."
                    />
                    <AccordionTile
                        title="Can I generate sales through influencer marketing?"
                        description="Yes, it is possible to drive sales through influencer marketing. This can be achieved by creating focused content on e-commerce, such as shopping inspirations and detailed walkthroughs of products. Additionally, with Good Creator Co's programmatic influencer marketing, you can even get guaranteed sales!"
                    />
                </div>
            </div>
        </section>
    );
}

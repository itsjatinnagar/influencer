import Heading from "@/components/common/Heading";

export default function SectionHeader({ as, children, className }) {
    return (
        <div className="mb-10">
            <Heading as={as} className={className}>
                {children}
            </Heading>
        </div>
    );
}

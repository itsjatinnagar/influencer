import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const headingVariants = cva(
    "flex items-center justify-center flex-wrap text-center gap-1",
    {
        variants: {
            size: {
                h1: "text-3xl font-extrabold sm:text-4xl md:text-5xl xl:text-7xl",
                h2: "text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl",
                h3: "text-xl font-semibold",
                h4: "text-lg font-medium",
                h5: "text-base font-medium",
                h6: "text-sm font-medium",
            },
        },
        defaultVariants: {
            size: "h1",
        },
    }
);

export default function Heading({ as: Tag, children, className, ...props }) {
    const validTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const TagName = validTags.includes(Tag) ? Tag : "h1";

    return (
        <TagName
            className={cn(headingVariants({ size: TagName }), className)}
            {...props}
        >
            {children}
        </TagName>
    );
}

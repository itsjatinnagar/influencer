import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-5 pt-12 bg-primary text-primary-foreground">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="mb-6 px-2 flex flex-col gap-y-2 grow-0 shrink-0 basis-1/2">
                        <strong>Home</strong>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Top Brands
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Case Studies
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Top Instagram Influencers in India
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Top Youtubers in India
                        </Link>
                    </div>
                    <div className="mb-6 px-2 flex flex-col gap-y-2 grow-0 shrink-0 basis-1/2">
                        <strong>I'm a Creator</strong>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Why GCC
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            App Features
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            The Process
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Top Creators
                        </Link>
                    </div>
                    <div className="mb-6 px-2 flex flex-col gap-y-2 grow-0 shrink-0 basis-1/2">
                        <strong>About Us</strong>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            About GCC
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Contact Us
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Cancellation & Refunds
                        </Link>
                    </div>
                    <div className="mb-6 px-2 flex flex-col gap-y-2 grow-0 shrink-0 basis-1/2">
                        <strong>Products & Services</strong>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Creator Search
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Creator Insights
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Campaign Manager
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Brand Suitability & Intelligence
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Topic Research
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            Leaderboard
                        </Link>
                        <Link
                            className="text-slate-200 hover:underline"
                            href="#"
                        >
                            All Products
                        </Link>
                    </div>
                </div>
                <hr className="bg-white" />
                <div className="py-6 text-center">
                    <p className="font-light">
                        The Good Creator Co. &copy; 2024
                    </p>
                </div>
            </div>
        </footer>
    );
}

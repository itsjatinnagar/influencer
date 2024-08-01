import Image from "next/image";

export default function TopBrand() {
    return (
        <div className="mb-20 px-5">
            <div className="mx-auto container">
                <div className="flex items-center justify-center gap-x-6 overflow-x-hidden">
                    {Array.from({ length: 9 }, (_, index) => index + 1).map(
                        (num) => (
                            <Image
                                key={num}
                                src={`/brand_${num}.png`}
                                width="200"
                                height="200"
                                className="h-6 w-auto"
                                alt="top brand"
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

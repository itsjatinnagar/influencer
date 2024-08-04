export default function StatisticCard({ children, title, subtitle }) {
    return (
        <div className="flex items-center justify-center gap-x-5">
            <div className="p-3">{children}</div>
            <div className="text-primary flex-shrink-0">
                <h3 className="text-5xl font-bold">{title}</h3>
                <p className="text-xl uppercase">{subtitle}</p>
            </div>
        </div>
    );
}

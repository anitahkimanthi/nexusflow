import { useEffect, useState } from "react";

type AnimatedMetricValueProps = {
    value: string;
};

export default function AnimatedMetricValue({ value }: AnimatedMetricValueProps) {
    const numericValue = Number(value.replace(/[^0-9.]/g, ""));
    const hasPercent = value.includes("%");

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (Number.isNaN(numericValue)) return;

        let frame: number;
        let start: number | null = null;
        const duration = 1200;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);
            setDisplayValue(numericValue * progress);

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [numericValue]);

    if (Number.isNaN(numericValue)) return <>{value}</>;

    const formatted = hasPercent
        ? displayValue.toFixed(value.includes(".") ? 1 : 0) + "%"
        : Math.round(displayValue).toLocaleString();

    return <>{formatted}</>;
}
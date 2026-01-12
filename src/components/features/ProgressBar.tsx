"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
    completed: number;
    total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
    const percentage = Math.round((completed / total) * 100);

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-zinc-400">
                <span>Progress</span>
                <span>{percentage}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
            <p className="text-xs text-zinc-500">
                {completed} of {total} weeks completed
            </p>
        </div>
    );
}

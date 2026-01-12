"use client";

import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import { getProgress, markWeekAsDone, setLastOpenedWeek } from "@/src/lib/storage";

export function ProgressWrapper({ weekId }: { weekId: number }) {
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        // On mount, check status
        const p = getProgress();
        if (p.completedWeeks[weekId]) {
            setIsDone(true);
        }
        // Update last opened
        setLastOpenedWeek(weekId);
    }, [weekId]);

    const toggle = () => {
        const newState = !isDone;
        setIsDone(newState);
        markWeekAsDone(weekId, newState);
    };

    return (
        <Button
            variant={isDone ? "secondary" : "default"}
            size="sm"
            onClick={toggle}
            className={`${isDone ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" : "bg-indigo-600 hover:bg-indigo-700"} text-xs sm:text-sm`}
        >
            {isDone ? (
                <>
                    <CheckCircle2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Completed</span>
                    <span className="sm:hidden">Done</span>
                </>
            ) : (
                <>
                    <Circle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Mark as Done</span>
                    <span className="sm:hidden">Mark</span>
                </>
            )}
        </Button>
    );
}

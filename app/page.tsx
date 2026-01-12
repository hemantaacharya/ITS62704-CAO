"use client";

import { useState, useEffect } from "react";
import { weeks } from "@/src/data/weeks_streamlined";
import { useMemo } from "react";
import { WeekCard } from "@/src/components/features/WeekCard";
import { ProgressBar } from "@/src/components/features/ProgressBar";
import {
    getProgress,
    markWeekAsDone,
    setLastOpenedWeek,
    UserProgress,
} from "@/src/lib/storage";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Search, PlayCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/src/lib/motion";
import Link from "next/link";
import { ProgressManager } from "@/src/components/features/ProgressManager";

// Search Input Component using the UI Input
function SearchInput({
    value,
    onChange,
}: {
    value: string;
    onChange: (val: string) => void;
}) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 z-10" />
            <Input
                type="text"
                placeholder="Search topics, tags..."
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                className="pl-9 bg-zinc-950 border-zinc-800 text-zinc-100"
            />
        </div>
    );
}

export default function Home() {
    const [query, setQuery] = useState("");
    const [progress, setProgress] = useState<UserProgress>({
        completedWeeks: {},
        lastOpenedWeek: 1,
    });
    const [mounted, setMounted] = useState(false);

    // Hydrate from localStorage
    useEffect(() => {
        setProgress(getProgress());
        setMounted(true);
    }, []);

    // Compute Resume Week
    const resumeWeekId = useMemo(() => {
        // If last opened is not done, go there.
        if (!progress.completedWeeks[progress.lastOpenedWeek]) {
            return progress.lastOpenedWeek;
        }
        // Else find first incomplete
        const firstIncomplete = weeks.find((w) => !progress.completedWeeks[w.week]);
        return firstIncomplete ? firstIncomplete.week : 1;
    }, [progress]);

    // Filter weeks
    const filteredWeeks = useMemo(() => {
        const q = query.toLowerCase();
        return weeks.filter(
            (w) =>
                w.title.toLowerCase().includes(q) ||
                w.tags.some((t) => t.toLowerCase().includes(q)) ||
                w.week.toString().includes(q)
        );
    }, [query]);

    // Completion Stats
    const completedCount = Object.values(progress.completedWeeks).filter(
        Boolean
    ).length;

    const handleToggleComplete = (id: number) => {
        const isDone = !progress.completedWeeks[id];
        const newProgress = markWeekAsDone(id, isDone);
        setProgress(newProgress);
    };

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black p-4 md:p-8 font-sans">
            <ProgressManager progress={progress} />

            <div className="max-w-8xl mx-auto space-y-8">
                {/* Header Section */}
                <section className="flex flex-col md:flex-row gap-6 justify-between items-end">
                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Computer Architecture <span className="text-indigo-500">&</span>{" "}
                            Organisation
                        </h1>
                        <p className="text-lg text-zinc-400">
                            ITS62704 Student Learning Portal
                        </p>
                        <div className="w-full max-w-md pt-2">
                            <ProgressBar completed={completedCount} total={weeks.length} />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                            <Link href={`/week/${resumeWeekId}`}>
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Resume Learning
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-zinc-300 border-zinc-700">
                            <BookOpen className="mr-2 h-5 w-5" />
                            Syllabus
                        </Button>
                    </div>
                </section>

                {/* Search & Grid */}
                <section className="space-y-6">
                    <div className="max-w-md">
                        <SearchInput value={query} onChange={setQuery} />
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid-responsive-cards"
                    >
                        {filteredWeeks.map((week) => (
                            <motion.div key={week.week} variants={fadeIn}>
                                <WeekCard
                                    week={week}
                                    isCompleted={!!progress.completedWeeks[week.week]}
                                    onToggleComplete={handleToggleComplete}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredWeeks.length === 0 && (
                        <div className="text-center py-20 text-zinc-500">
                            No weeks found matching &quot;{query}&quot;
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

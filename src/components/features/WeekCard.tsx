"use client";

import { WeekData } from "@/src/data/weeks_streamlined";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface WeekCardProps {
    week: WeekData;
    isCompleted: boolean;
    onToggleComplete: (id: number) => void;
}

export function WeekCard({ week, isCompleted, onToggleComplete }: WeekCardProps) {
    return (
        <Card className="flex flex-col h-full border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
            <CardHeader>
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <Badge variant="outline" className="w-fit mb-2 border-zinc-700 text-zinc-400">
                            Week {week.week}
                        </Badge>
                        <CardTitle className="text-lg line-clamp-2 min-h-[3rem]">
                            {week.title}
                        </CardTitle>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onToggleComplete(week.week);
                        }}
                        className="text-zinc-500 hover:text-emerald-500 transition-colors shrink-0"
                        title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                    >
                        {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        ) : (
                            <Circle className="w-6 h-6" />
                        )}
                    </button>
                </div>
                <CardDescription className="line-clamp-2 mt-2">
                    {week.overview}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {week.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-zinc-800 text-zinc-400">
                            {tag}
                        </Badge>
                    ))}
                    {week.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-400">
                            +{week.tags.length - 3}
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild className="w-full group" variant={isCompleted ? "secondary" : "default"}>
                    <Link href={`/week/${week.week}`}>
                        {isCompleted ? "Review Week" : "Start Learning"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

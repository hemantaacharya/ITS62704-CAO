"use client";

import { useState } from "react";
import { TutorialQuestion as TQType } from "@/src/data/weeks_streamlined";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronDown, ChevronUp, Lightbulb, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";

export function TutorialQuestion({ question }: { question: TQType }) {
    const [showHints, setShowHints] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const difficultyColor = {
        easy: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        medium: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        hard: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    };

    return (
        <Card className="border-zinc-800 bg-zinc-900/30 overflow-hidden">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4 mb-2">
                    <Badge
                        variant="outline"
                        className={cn("capitalize border", difficultyColor[question.difficulty])}
                    >
                        {question.difficulty}
                    </Badge>
                </div>
                <CardTitle className="text-base font-normal leading-relaxed text-zinc-200">
                    {question.prompt}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Actions */}
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowHints(!showHints)}
                        className="text-zinc-400 hover:text-zinc-200"
                    >
                        <Lightbulb className="w-4 h-4 mr-2" />
                        {showHints ? "Hide Hints" : "Show Hints"}
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="text-zinc-400 hover:text-zinc-200"
                    >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </Button>
                </div>

                {/* Hints */}
                <AnimatePresence>
                    {showHints && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-4 space-y-2">
                                <h4 className="text-sm font-semibold text-yellow-500 flex items-center">
                                    <Lightbulb className="w-4 h-4 mr-2" />
                                    Hints
                                </h4>
                                <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                                    {question.hints.map((hint, i) => (
                                        <li key={i}>{hint}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sample Answer */}
                <AnimatePresence>
                    {showAnswer && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4 space-y-2">
                                <h4 className="text-sm font-semibold text-emerald-500">
                                    Sample Answer
                                </h4>
                                <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
                                    {question.sampleAnswer.map((ans, i) => (
                                        <li key={i}>{ans}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}

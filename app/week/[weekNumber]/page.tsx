import { notFound } from "next/navigation";
import Link from "next/link";
import { weeks } from "@/src/data/weeks_streamlined";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { TutorialQuestion } from "@/src/components/features/TutorialQuestion";
import { DynamicThreeScene } from "@/src/components/features/DynamicThreeScene";
import { ArrowLeft, ChevronRight, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { ProgressWrapper } from "./_components/ProgressWrapper";
import { ConceptVisualization } from "@/src/components/features/ConceptVisualizations";

export async function generateStaticParams() {
    return weeks.map((week) => ({
        weekNumber: week.week.toString(),
    }));
}

export default function WeekPage({ params }: { params: { weekNumber: string } }) {
    const weekNum = parseInt(params.weekNumber);
    const weekData = weeks.find((w) => w.week === weekNum);

    if (!weekData) {
        notFound();
    }

    const prevWeek = weeks.find((w) => w.week === weekNum - 1);
    const nextWeek = weeks.find((w) => w.week === weekNum + 1);

    return (
        <div className="min-h-screen bg-black pb-20">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
                <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Link href="/" className="hover:text-white transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <span className="hidden sm:inline">Home</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white font-medium">Week {weekNum}</span>
                    </div>

                    <ProgressWrapper weekId={weekNum} />
                </div>
            </header>

            <main className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl space-y-8 sm:space-y-12">
                {/* Title Section */}
                <section className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-indigo-400 border-indigo-500/30">
                            Week {weekNum}
                        </Badge>
                        <Badge variant="outline" className="text-zinc-400">
                            {weekData.mlo}
                        </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 leading-tight tracking-tight max-w-full">
                        {weekData.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {weekData.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-zinc-900 border border-zinc-800 text-zinc-400">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* 1. Overview */}
                <section id="overview" className="space-y-4">
                    <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-2">Overview</h2>
                    <Card className="bg-zinc-900/40 border-l-4 border-l-indigo-500 border-y-0 border-r-0 rounded-r-lg rounded-l-none">
                        <CardContent className="p-6">
                            <p className="text-lg leading-relaxed text-zinc-300 text-justify">
                                {weekData.overview}
                            </p>
                        </CardContent>
                    </Card>

                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                        <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
                            <h3 className="font-semibold text-white mb-6">Learning Goals</h3>
                            <ul className="space-y-3">
                                {weekData.learningGoals.map((g, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed text-justify">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                        <span>{g}</span>
                                    </li>
                                ))}
                                {weekData.learningGoals.length === 0 && <li className="text-zinc-600 italic">No goals listed.</li>}
                            </ul>
                        </div>
                        <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
                            <h3 className="font-semibold text-white mb-6">Key Terms</h3>
                            <ul className="space-y-3">
                                {weekData.keyTerms.map((t, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed text-justify">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                                {weekData.keyTerms.length === 0 && <li className="text-zinc-600 italic">No terms listed.</li>}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. Concepts */}
                <section id="concepts" className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-2">Key Concepts</h2>
                    <div className="grid gap-6">
                        {weekData.concepts.map((concept, idx) => (
                            <Card key={idx} className="bg-zinc-900/20 border-zinc-800">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4">{concept.heading}</h3>
                                    
                                    {/* Concept Visualization */}
                                    <ConceptVisualization weekNumber={weekNum} conceptIndex={idx} />
                                    
                                    <ul className="grid gap-4 mt-6">
                                        {concept.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-zinc-300 flex items-start gap-3 text-sm sm:text-base leading-relaxed text-justify">
                                                <span className="text-indigo-500/50 mt-1.5 flex-shrink-0">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                        {weekData.concepts.length === 0 && <p className="text-zinc-500">Content coming soon for this week.</p>}
                    </div>
                </section>

                {/* Interactive Illustrations (Conditionally Rendered) */}
                {(weekNum >= 1 && weekNum <= 8) && (
                    <section id="visualization" className="space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                            <h2 className="text-2xl font-bold text-white">
                                {weekNum === 1 && "Interactive Illustration"}
                                {weekNum === 2 && "Binary Visualization"}
                                {weekNum === 3 && "Logic Gates Illustration"}
                                {weekNum === 4 && "Instruction Set Architecture"}
                                {weekNum === 5 && "Memory Hierarchy"}
                                {weekNum === 6 && "CPU Pipeline"}
                                {weekNum === 7 && "Cache Organization"}
                                {weekNum === 8 && "Assembly Language Simulator"}
                            </h2>
                            <Badge className={`border-none ${
                                weekNum === 1 ? "bg-gradient-to-r from-indigo-500 to-purple-500" :
                                weekNum === 2 ? "bg-gradient-to-r from-green-500 to-blue-500" :
                                weekNum === 3 ? "bg-gradient-to-r from-yellow-500 to-red-500" :
                                weekNum === 4 ? "bg-gradient-to-r from-cyan-500 to-blue-500" :
                                weekNum === 5 ? "bg-gradient-to-r from-red-500 to-purple-500" :
                                weekNum === 6 ? "bg-gradient-to-r from-orange-500 to-pink-500" :
                                weekNum === 7 ? "bg-gradient-to-r from-purple-500 to-indigo-500" :
                                "bg-gradient-to-r from-green-500 to-cyan-500"
                            }`}>
                                {weekNum === 1 && "Interactive"}
                                {weekNum === 2 && "Number Systems"}
                                {weekNum === 3 && "Boolean Logic"}
                                {weekNum === 4 && "ISA Simulator"}
                                {weekNum === 5 && "Cache Simulation"}
                                {weekNum === 6 && "Pipeline Visualization"}
                                {weekNum === 7 && "Cache Organization"}
                                {weekNum === 8 && "Assembly Simulator"}
                            </Badge>
                        </div>
                        <p className="text-zinc-400 text-justify leading-relaxed">
                            {weekNum === 1 && "Explore the main components of computer architecture. Click components for details."}
                            {weekNum === 2 && "See how binary digits represent decimal numbers. Try different numbers to see their binary representation."}
                            {weekNum === 3 && "Interactive logic gates showing how Boolean operations work. Toggle inputs to see outputs change."}
                            {weekNum === 4 && "Simulate instruction execution with registers. Select instructions and see how they modify register values."}
                            {weekNum === 5 && "Explore memory hierarchy levels and cache behavior. Compare sequential vs random access patterns."}
                            {weekNum === 6 && "Visualize CPU pipeline stages. Watch instructions flow through fetch, decode, execute, memory, and writeback stages."}
                            {weekNum === 7 && "Understand cache organization and address mapping. See how memory addresses map to cache locations."}
                            {weekNum === 8 && "Step through assembly language programs. Watch registers and flags change as instructions execute."}
                        </p>
                        <DynamicThreeScene week={weekNum} />
                    </section>
                )}

                {/* 4. Tutorial Questions */}
                <section id="tutorial" className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-2">Tutorial Questions</h2>
                    <div className="space-y-6">
                        {weekData.tutorialQuestions.map((q) => (
                            <TutorialQuestion key={q.id} question={q} />
                        ))}
                        {weekData.tutorialQuestions.length === 0 && <p className="text-zinc-500">No tutorial questions for this week yet.</p>}
                    </div>
                </section>

                {/* Self Check */}
                <section id="checklist" className="space-y-6 bg-zinc-900/20 p-6 rounded-xl border border-zinc-800">
                    <h2 className="text-lg sm:text-xl font-semibold text-white">Self-Check Checklist</h2>
                    <div className="space-y-4">
                        {weekData.learningGoals.map((goal, i) => (
                            <label key={i} className="flex items-start gap-4 p-4 rounded-lg bg-zinc-950/50 cursor-pointer hover:bg-zinc-900 transition-colors">
                                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-indigo-500 flex-shrink-0" />
                                <span className="text-zinc-300 text-sm leading-relaxed text-justify">{goal}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Navigation Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800">
                    {prevWeek ? (
                        <Button variant="ghost" asChild className="text-zinc-400 hover:text-white pl-0 w-full sm:w-auto">
                            <Link href={`/week/${prevWeek.week}`}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Week {prevWeek.week}
                            </Link>
                        </Button>
                    ) : (
                        <div className="hidden sm:block" />
                    )}

                    {nextWeek ? (
                        <Button variant="ghost" asChild className="text-zinc-400 hover:text-white pr-0 w-full sm:w-auto">
                            <Link href={`/week/${nextWeek.week}`}>
                                Week {nextWeek.week}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="ghost" asChild className="text-zinc-400 hover:text-white pr-0 w-full sm:w-auto">
                            <Link href="/">
                                Back to Home
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </main>
        </div>
    );
}

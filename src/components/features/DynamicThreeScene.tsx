"use client";

import { Week1Illustration, Week2Illustration, Week3Illustration, Week4Illustration, Week5Illustration, Week6Illustration, Week7Illustration, Week8Illustration } from './WeekIllustrations';

interface DynamicThreeSceneProps {
    week: number;
}

export function DynamicThreeScene({ week }: DynamicThreeSceneProps) {
    switch (week) {
        case 1:
            return <Week1Illustration />;
        case 2:
            return <Week2Illustration />;
        case 3:
            return <Week3Illustration />;
        case 4:
            return <Week4Illustration />;
        case 5:
            return <Week5Illustration />;
        case 6:
            return <Week6Illustration />;
        case 7:
            return <Week7Illustration />;
        case 8:
            return <Week8Illustration />;
        default:
            return (
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-zinc-950 overflow-hidden border border-zinc-800 flex items-center justify-center">
                    <div className="text-zinc-500">Illustration coming soon...</div>
                </div>
            );
    }
}
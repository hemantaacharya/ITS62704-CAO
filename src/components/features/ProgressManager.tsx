"use client";

import { useEffect } from "react";
import { saveProgress, UserProgress } from "@/src/lib/storage";

export function ProgressManager({ progress }: { progress: UserProgress }) {
    useEffect(() => {
        saveProgress(progress);
    }, [progress]);

    return null;
}

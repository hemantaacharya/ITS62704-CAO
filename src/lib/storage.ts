export type UserProgress = {
    completedWeeks: Record<number, boolean>;
    lastOpenedWeek: number;
};

const STORAGE_KEY = "its62704-progress-v1";

const defaultProgress: UserProgress = {
    completedWeeks: {},
    lastOpenedWeek: 1,
};

export function getProgress(): UserProgress {
    if (typeof window === "undefined") return defaultProgress;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultProgress;
    } catch (error) {
        console.error("Failed to load progress", error);
        return defaultProgress;
    }
}

export function saveProgress(progress: UserProgress) {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error("Failed to save progress", error);
    }
}

export function markWeekAsDone(weekId: number, isDone: boolean) {
    const current = getProgress();
    const next = {
        ...current,
        completedWeeks: {
            ...current.completedWeeks,
            [weekId]: isDone,
        },
    };
    saveProgress(next);
    return next;
}

export function setLastOpenedWeek(weekId: number) {
    const current = getProgress();
    const next = {
        ...current,
        lastOpenedWeek: weekId,
    };
    saveProgress(next);
    return next;
}

import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black text-center space-y-4">
            <h1 className="text-6xl font-bold text-indigo-500">404</h1>
            <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
            <p className="text-zinc-400 max-w-md">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>
            <Button asChild className="mt-8">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}

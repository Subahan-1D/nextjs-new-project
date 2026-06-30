"use client";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold text-red-600">
                Error occurred while fetching products
            </h1>

            <p className="text-gray-600">{error?.message}</p>

            <button
                onClick={() => reset()}
                className="bg-red-500 px-5 py-2 text-white rounded hover:bg-red-600"
            >
                Try Again
            </button>
        </div>
    );
}
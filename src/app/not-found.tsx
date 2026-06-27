"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-5xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-300 text-lg leading-8">
          Sorry, the page you are looking for does not exist or has been moved.
          Lets get you back to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:bg-cyan-600 hover:scale-105 transition-all duration-300"
          >
            🏠 Back to Home
          </Link>

          <button
            onClick={() => history.back()}
            className="px-4 py-2 rounded-xl border border-gray-500 text-white hover:bg-white/10 transition-all duration-300"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center space-x-2 text-center text-2xl font-bold text-gray-100 py-0"
    >
      {/* Icon container */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased">
        {/* Top glow */}
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/20 blur-xl" />
        {/* Icon */}
        <div className="relative z-20 text-sm">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
          </svg>
        </div>
      </div>

      {/* Brand name — hidden on small screens */}
      <div className="hidden flex-col sm:flex">
        <h1 className="font-sans text-white">Startup</h1>
      </div>
    </Link>
  );
}

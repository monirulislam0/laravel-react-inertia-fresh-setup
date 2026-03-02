import FrontendLayout from '@/layouts/frontend-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <FrontendLayout>
            <Head title="Home Page" />
            <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-sm text-sky-400">
                        Serving 1,200+ Apartments
                    </span>
                </div>
                <h1
                    className="mb-6 text-6xl leading-tight font-extrabold"
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        letterSpacing: '-1.5px',
                    }}
                >
                    Internet Service
                    <br />
                    <span className="bg-linear-to-br from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                        Management Portal
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b8aaa]">
                    A complete platform for property managers to offer ISP
                    services — tenant billing, service activation, payment
                    tracking, and tech support all in one place.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        className={`cursor-pointer rounded-lg bg-linear-to-br from-sky-500 to-cyan-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-px hover:opacity-90`}
                    >
                        View Admin Demo
                    </button>

                    <button
                        className={`cursor-pointer rounded-lg border border-[#1a2f4a] bg-transparent px-8 py-3.5 text-sm font-medium text-sky-400 transition-all hover:border-sky-500 hover:bg-sky-500/10`}
                    >
                        View Tenant Demo
                    </button>
                </div>
            </div>
            <div className="mx-auto mb-20 max-w-6xl px-6">
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {[
                        ['1,200+', 'Active Apartment Units'],
                        ['99.7%', 'Network Uptime'],
                        ['$0', 'Late Payments Missed'],
                        ['3 min', 'Avg. Activation Time'],
                    ].map(([val, label]) => (
                        <div
                            key={label}
                            className={`cursor-default rounded-xl border border-[#1a2f4a] bg-[#0f1e35] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)]`}
                        >
                            <div
                                className="mb-1 text-4xl font-extrabold"
                                style={{ fontFamily: 'Syne, sans-serif' }}
                            >
                                <span className="bg-linear-to-br from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                                    {val}
                                </span>
                            </div>
                            <div className="text-sm text-[#6b8aaa]">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FrontendLayout>
    );
}

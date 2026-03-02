export function FrontendHeader() {
    return (
        <header className="border-b bg-white">
            {/* <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="#" className="flex items-center gap-2">
                    <AppLogo className="h-10 w-auto" />
                    <span className="text-lg font-semibold text-gray-900">Horizon</span>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        Contact
                    </Link>
                </div>
            </nav> */}

            <nav className="sticky top-0 z-50 border-b border-[#1a2f4a] bg-[#050d1a]/85 backdrop-blur-lg">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-2.5">
                        <div
                            className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-sm font-extrabold text-white select-none`}
                        >
                            {'N'}
                        </div>
                        <span
                            className="text-xl font-extrabold tracking-tight"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            NetServe
                            <span className="bg-gradient-to-br from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                                {'Pro'}
                            </span>
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className={`cursor-pointer rounded-lg border border-[#1a2f4a] bg-transparent px-4 py-2 text-sm font-medium text-sky-400 transition-all hover:border-sky-500 hover:bg-sky-500/10`}
                        >
                            Tenant Login
                        </button>{' '}
                        <button
                            className={`cursor-pointer rounded-lg border border-[#1a2f4a] bg-transparent px-4 py-2 text-sm font-medium text-sky-400 transition-all hover:border-sky-500 hover:bg-sky-500/10 `}
                        >
                            Admin Portal
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

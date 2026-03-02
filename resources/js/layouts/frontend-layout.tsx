import * as React from 'react';

import { FrontendFooter } from '@/layouts/partials/frontend/footer';
import { FrontendHeader } from '@/layouts/partials/frontend/header';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
    return (
        <div className="min-h-screen bg-[#050d1a] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(6,182,212,0.10)_0%,transparent_60%)] flex flex-col">
            <FrontendHeader />
            <main className="flex-1 flex flex-col">{children}</main>
            <FrontendFooter />
        </div>
    );
}
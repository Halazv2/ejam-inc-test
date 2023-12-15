import { Footer } from '@layouts/Footer';
import { Header } from '@layouts/Header';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900 w-full">
            <Header />
            <div className="relative flex w-full flex-col">
                <main className="flex-auto">{children}</main>
            </div>
            <Footer />
        </div>
    );
}

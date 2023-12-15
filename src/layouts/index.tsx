import { Layout } from './Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full bg-zinc-50 dark:bg-black">
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </div>
    );
}

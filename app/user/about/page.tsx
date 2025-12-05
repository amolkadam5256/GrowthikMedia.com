// app/page.tsx

export default function Home() {
    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                        Amol Tukaram Kadam<span className="text-yellow-400">Digital Marketing</span>
                    </h1>
                </div>
            </div>
        </main>
    );
}

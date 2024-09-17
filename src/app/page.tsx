import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test",
  description: "Test static export nextjs",
  openGraph: {
    title: "Test",
    description: "Test static export nextjs",
    images:
      "https://res.cloudinary.com/dlce2r3mg/image/upload/v1679982526/cld-sample-3.jpg",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        TEST
      </main>
    </div>
  );
}


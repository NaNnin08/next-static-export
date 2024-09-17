import Head from "next/head";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <meta property="og:description" content="Test static export nextjs" />
        <meta property="og:title" content="Test" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlce2r3mg/image/upload/v1679982526/cld-sample-4.jpg"
        />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        TEST
      </main>
    </div>
  );
}


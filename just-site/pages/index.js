import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>raldblo[x]</title>
        <meta name="description" content="am just raldblox" />
        <meta name="author" content="raldblox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex items-center justify-center min-h-screen p-24">
        <h1 className="text-3xl font-bold">raldblo[x]</h1>
      </main>
    </>
  );
}

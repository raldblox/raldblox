import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.1rem_#00ff00] hover:dark:drop-shadow-none duration-500"
        src="/raldblox.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main >
  )
}

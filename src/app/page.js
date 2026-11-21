import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 min-h-screen flex-col justify-center items-center">
      <Link href="/contact">Go to Contact</Link>
      <Link href="/about">Go to About</Link>
    </div>
  );
}

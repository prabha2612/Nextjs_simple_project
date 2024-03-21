import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Fruits</h1>
      <h3>
        <Link href="/fruits">Types of Fruits</Link>
      </h3>
    </div>
  );
}

import Heading from "@/components/Heading";
import Link from "next/link";

export default function Fruits() {
  return (
    <div className="flex-row">
      <Heading>Types of Fruits</Heading>
      <ul
        className="bg-white border rounded
                       hover:shadow-xl sm:w-40"
      >
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3 hover:divide-violet-100">
          <Link href="/fruits/melon">Melons</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/berries">Berries</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/tropical">Tropical Fruits</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/citrus">Citrus Fruits</Link>
        </li>
      </ul>
      <ul
        className="bg-white border rounded
                       hover:shadow-xl sm:w-40"
      >
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/stoneFruits">Stone Fruits</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/exoticFruits">Exotic Fruits</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/drupeFruits">Drupe Fruits</Link>
        </li>
        <li className="container border rounded shadow-inner w-36 bg-red-300 text-center py-3">
          <Link href="/fruits/pomeFruits">Pome fruits</Link>
        </li>
      </ul>
    </div>
  );
}

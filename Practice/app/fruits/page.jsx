import Link from "next/link";

export default function Fruits() {
  return (
    <div>
      <h1>Fruits</h1>
      <h3>Types of Fruits</h3>
      <ul>
        <li>
          <Link href="/fruits/melon">Melons</Link>
        </li>
        <li>
          <Link href="/fruits/berries">Berries</Link>
        </li>
        <li>
          <Link href="/fruits/tropical">Tropical Fruits</Link>
        </li>
        <li>
          <Link href="/fruits/citrus">Citrus Fruits</Link>
        </li>
        <li>
          <Link href="/fruits/stoneFruits">Stone Fruits</Link>
        </li>
        <li>
          <Link href="/fruits/exoticFruits">Exotic Fruits</Link>
        </li>
        <li>
          <Link href="/fruits/drupeFruits">Drupe Fruits</Link>
        </li>
        <li>
          <Link href="/fruits/pomeFruits">Pome fruits</Link>
        </li>
      </ul>
    </div>
  );
}

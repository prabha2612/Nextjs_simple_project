import Link from "next/link";
import { ultra } from "./fonts";
import Heading from "@/components/Heading";
import Image from "next/image";
export default function HomePage() {
  return (
    <div>
      <Heading>
        <Link className=" font-ultra text-8xl text-red-500" href="/fruits">
          Fruits
        </Link>
      </Heading>
      <Image
        className="place-content-center"
        src="/images/fruits.jpg"
        alt="Picture of Fruits"
        width="900"
        height="360"
      />
    </div>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log(`placing your order ! `);
    router.push(`/products`);
  };

  return (
    <>
      <div>
        <h2>home page ! </h2>
        <Link href="/about"> about </Link>
      </div>
      <div>
        <Link href="/products"> product ! </Link>
      </div>
      <button onClick={handleClick}>place order</button>
    </>
  );
}

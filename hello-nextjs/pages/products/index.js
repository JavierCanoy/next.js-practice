import Link from "next/link";
import { useRouter } from "next/router";
function ProductList() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <>
      <h1>
        <Link href="/products/1">product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">product 2</Link>{" "}
      </h1>
      <h1>
        <Link href="/products/3">product 3</Link>
      </h1>
      <button onClick={handleClick}>Home! </button>
    </>
  );
}

export default ProductList;

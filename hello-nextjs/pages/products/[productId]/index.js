import { useRouter } from "next/router";
function Deatails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h2>prodcut details {productId} </h2>
    </>
  );
}
export default Deatails;

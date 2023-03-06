import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <>
        <h1>
          viewing ! {params[0]} {params[1]}{" "}
        </h1>
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        <h1>yoour router you want to get in ! {params[0]}</h1>
      </>
    );
  }

  return (
    <>
      <h1> document ! from router = {params}</h1>
    </>
  );
}

export default Doc;

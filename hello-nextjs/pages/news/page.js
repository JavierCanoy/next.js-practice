import React from "react";
import { getData } from "../lib/getData";

export default async function News() {
  const fetch = await getData();
  return (
    <div id="data" className=" w-full ">
      <div>
        <Image
          src={fetch.message}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

"use client";

import { useCallback } from "react";

export default function Button(props: { text: string }) {
  const handleOnClick = useCallback(() => {
    console.log("click");
  }, []);
  return (
    <button className="p-2 rounded-xl bg-white text-black text-xl" onClick={handleOnClick}>
      {props.text}
    </button>
  );
}

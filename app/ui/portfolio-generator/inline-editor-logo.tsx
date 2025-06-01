"use client";

import { usePortfolioDispatch } from "@/app/contexts/portfolio-state-context";
import { InlineEditablePropsType } from "@/app/definitions";
import Image from "next/image";
import { useState } from "react";

export default function InlineEditorLogo({
  value,
  placeholder,
  actionType,
  field,
}: InlineEditablePropsType) {
  const [isEditing, setIsEditing] = useState(false);
  const [url, setUrl] = useState(
    value || "https://pngtree.com/so/globe-vector"
  );
  const dispatch = usePortfolioDispatch();
  function onBlur(e: React.FocusEvent<HTMLDivElement>) {
    setIsEditing(false);
    const newValue = e.currentTarget.textContent?.trim() || "";

    setUrl(`https://logo.clearbit.com/${newValue}.com`);
    if (url) console.log("New Value:", url);

    if (dispatch)
      dispatch({
        type: actionType,
        payload: {
          value:
            `https://logo.clearbitcom/${e.currentTarget.textContent?.trim()}.com` ||
            "https://logo.clearbit.com/globe.png",
          field,
        },
      });
  }
  return (
    <>
      {isEditing ? (
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={onBlur}
          className="inline-block border-b border-dashed border-gray-300 focus:border-solid focus:border-indigo-500 px-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {value || <span className="text-gray-400">{placeholder}</span>}
        </span>
      ) : (
        <Image
          onClick={() => setIsEditing(true)}
          className="rounded-full"
          src={url}
          alt="logo"
          height={30}
          width={30}
        />
      )}
    </>
  );
}

"use client";

import { usePortfolioDispatch } from "@/app/contexts/portfolio-state-context";
import { useState } from "react";

export default function ProfessionalInfo() {
  const dispatch = usePortfolioDispatch();
  const [count, setCount] = useState(1);

  //   function onJobTitleChange(e: ChangeEvent<HTMLInputElement>) {
  //     if (dispatch)
  //       dispatch({
  //         type: "UPDATE_WORK_EXPERIENCE",
  //         payload:
  //       });
  //   }
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold mb-5">Professional Information</h2>
      <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
      {[...Array(count)].map((_, index) => (
        <form
          key={index}
          className={`flex flex-col gap-4 ${count > 1 && "mt-3"}`}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Job Title</label>
            <input className="form-input" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Company Name</label>
            <input className="form-input" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Description</label>
            <textarea className="form-input" cols={30} rows={10} />
          </div>
        </form>
      ))}
      <button
        className="text-white bg-black px-3 py-1 active:scale-101 mt-5"
        onClick={() => setCount(count + 1)}
      >
        Add Work Experience
      </button>
    </div>
  );
}

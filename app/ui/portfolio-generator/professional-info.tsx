"use client";

import {
  usePortfolioDispatch,
  usePortfolioState,
} from "@/app/contexts/portfolio-state-context";
import { ChangeEvent, useEffect, useState } from "react";

export default function ProfessionalInfo() {
  const dispatch = usePortfolioDispatch();
  const { work } = usePortfolioState();
  const [count, setCount] = useState(0);

  function onJobTitleChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_WORK_EXPERIENCE",
        payload: {
          field: "jobTitle",
          value: e.target.value,
          index: count,
        },
      });
  }

  function onCompanyChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_WORK_EXPERIENCE",
        payload: {
          index: count,
          field: "company",
          value: e.target.value,
        },
      });
  }

  function onDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_WORK_EXPERIENCE",
        payload: {
          field: "description",
          value: e.target.value,
          index: count,
        },
      });
  }

  function fetchCompanyLogo(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_WORK_EXPERIENCE",
        payload: {
          field: "logo",
          value: `https://logo.clearbit.com/${e.target.value}`,
          index: count,
        },
      });
  }

  useEffect(() => {
    console.log(work);
  }, [work]);

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold mb-5">Professional Information</h2>
      <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
      {[...Array(count + 1)].map((_, index) => (
        <form
          key={index}
          className={`flex flex-col gap-4 ${count > 1 && "mt-3"}`}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Job Title</label>
            <input
              className="form-input"
              onChange={onJobTitleChange}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="web">Company Official Website</label>
            <input
              className="form-input"
              id="web"
              onChange={fetchCompanyLogo}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Company Name</label>
            <input
              className="form-input"
              onChange={onCompanyChange}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Description</label>
            <textarea
              className="form-input"
              onChange={onDescriptionChange}
              cols={30}
              rows={10}
            />
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

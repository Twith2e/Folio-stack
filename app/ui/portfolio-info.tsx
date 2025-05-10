"use client";

import { ChangeEvent } from "react";
import { usePortfolioDispatch } from "../contexts/portfolio-state-context";

export default function PortfolioInfo() {
  const dispatch = usePortfolioDispatch();
  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "name",
        value: e.target.value,
      });
  }
  function onBioChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "bio",
        value: e.target.value,
      });
  }

  return (
    <div className="overflow-y-scroll px-4 h-screen">
      <div>
        <h2 className="text-3xl mb-5 font-bold">Personal Information</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname">Full Name</label>
            <input
              className="form-input"
              type="text"
              id="fullname"
              onChange={onNameChange}
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="form-input"
              id="phone"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">LinkedIn</label>
            <input
              className="form-input"
              type="text"
              placeholder="LinkedIn URL"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">GitHub</label>
            <input
              className="form-input"
              type="text"
              placeholder="GitHub URL"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="skills">Skills (Comma Seperated please)</label>
            <input
              className="form-input"
              id="skills"
              type="text"
              placeholder="Skills"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Bio</label>
            <textarea
              onChange={onBioChange}
              className="form-input"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="text-3xl font-bold mb-5">Professional Information</h2>
        <form className="flex flex-col gap-4">
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
      </div>
    </div>
  );
}

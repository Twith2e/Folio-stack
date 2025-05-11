"use client";

import { usePortfolioDispatch } from "@/app/contexts/portfolio-state-context";
import { ChangeEvent } from "react";

export default function PersonalInfo() {
  const dispatch = usePortfolioDispatch();
  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
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

  function onSkillsChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "skills",
        value: e.target.value.split(","),
      });
  }

  function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "email",
        value: e.target.value,
      });
  }

  function onWhatsappChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "whatsapp",
        value: e.target.value,
      });
  }

  function onLinkedInChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "linkedin",
        value: e.target.value,
      });
  }

  function onGitHubChange(e: ChangeEvent<HTMLInputElement>) {
    if (dispatch)
      dispatch({
        type: "UPDATE_PROFILE_FIELD",
        field: "github",
        value: e.target.value,
      });
  }

  return (
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
            onChange={onWhatsappChange}
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
            onChange={onEmailChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">LinkedIn</label>
          <input
            className="form-input"
            onChange={onLinkedInChange}
            type="text"
            placeholder="LinkedIn URL"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">GitHub</label>
          <input
            className="form-input"
            onChange={onGitHubChange}
            type="text"
            placeholder="GitHub URL"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="skills">Skills (Comma Seperated please)</label>
          <input
            className="form-input"
            onChange={onSkillsChange}
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
  );
}

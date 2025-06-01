"use client";

import InlineEditor from "./inline-editor";
import InlineEditorLogo from "./inline-editor-logo";

export default function EditorPreview() {
  return (
    <main>
      <header className="fixed top-24 left-0 w-full z-50">
        <nav className="flex justify-between items-center bg-white text-black px-12 py-5 shadow-md">
          <span>
            <InlineEditor
              placeholder="Your Name"
              value="Your Name"
              actionType="SET_PROFILE"
              field="name"
            />
          </span>
          <ul className="flex gap-4 items-center">
            <li>
              <a href="">Work Experience</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pt-24 flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">
            Hi, I am{" "}
            <InlineEditor
              placeholder="Your Name"
              value="Your Name"
              actionType="SET_PROFILE"
              field="name"
            />
          </h2>
          <InlineEditor
            placeholder="Write your bio here..."
            value="Write your bio here..."
            actionType="SET_PROFILE"
            field="bio"
          />
          <InlineEditorLogo
            placeholder="social"
            value=""
            actionType="SET_PROFILE"
            field="whatsapp"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="bg-[#fafafa] text-black">
            <InlineEditor
              placeholder="Skill"
              value="Skill"
              actionType="SET_PROFILE"
              field="skills"
            />
          </div>
        </div>
      </div>
      <div className="pt-24">
        <h2 className="text-4xl font-bold justify-center mx-auto flex items-center gap-2">
          Work Experience <span className="animate-bounce">💼</span>
        </h2>
        <button className="bg-[#fafafa] text-black p-2 rounded-md hover:bg-gray-200 transition-colors">
          <span>Add Work Experience</span>
        </button>
      </div>
    </main>
  );
}

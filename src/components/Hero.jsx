import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center item-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-40 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/algerina/AI-summarizer", "_blank")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading experience with our open-source AI-powered
        summarizer that transforms articles into short and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;

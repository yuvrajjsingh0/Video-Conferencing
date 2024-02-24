import React from "react";
import GitHubButton from "react-github-btn";
import CreateRoom from "./create-room";

export default function Hero() {
  return (
    <div className="p-4 py-32 text-center hero">
      <h1 className="mb-8 text-5xl sm:text-6xl font-extrabold tracking-tight">
        Video Conferencing with Web
        <span className="text-yellow-500 mx-0.5">.</span>
        RTC
      </h1>
      <h2 className="mb-24 text-slate-300 text-2xl sm:text-3xl font-extrabold tracking-tight">
        <div className="inline-block">No logins.</div>&nbsp;
        <div className="inline-block">No tracking.</div>&nbsp;
        <div className="inline-block">No nonsense.</div>
      </h2>
      <CreateRoom />
      
    </div>
  );
}

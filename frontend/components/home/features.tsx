import {
  ArrowNarrowDownIcon,
  ArrowNarrowRightIcon,
  PlusCircleIcon,
  ShareIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";
import Container from "../container";

function FeaturesHeader({ text }: { text: string }) {
  return (
    <h2 className="mt-16 text-2xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">
      {text}
    </h2>
  );
}

function FeaturesContent({ children }: { children: React.ReactElement }) {
  return <p className="mt-4 max-w-3xl space-y-6 text-gray-500">{children}</p>;
}

function FeaturesStep({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex items-center justify-center space-x-2 font-medium text-indigo-500 text-xl ring ring-indigo-500 rounded-md px-2 py-2 sm:py-4 w-48 sm:w-60">
      {children}
    </div>
  );
}

function FeaturesArrow() {
  return (
    <>
      <ArrowNarrowRightIcon
        width={50}
        className="text-yellow-500 hidden sm:block"
      />
      <ArrowNarrowDownIcon width={40} className="text-yellow-500 sm:hidden" />
    </>
  );
}

export default function Features() {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 justify-center items-center">
          <FeaturesStep>
            <>
              <PlusCircleIcon width={24} />
              <span>Create a room</span>
            </>
          </FeaturesStep>
          <FeaturesArrow />
          <FeaturesStep>
            <>
              <ShareIcon width={24} />
              <span>Share the link</span>
            </>
          </FeaturesStep>
          <FeaturesArrow />
          <FeaturesStep>
            <>
              <VideoCameraIcon width={24} />
              <span>Chat!</span>
            </>
          </FeaturesStep>
        </div>
        
      </Container>
    </div>
  );
}

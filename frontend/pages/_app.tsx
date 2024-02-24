import React from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen text-white">
        <Head>
          <title>Video Conferencing using WebRTC</title>
          <link rel="icon" type="image/png" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default App;

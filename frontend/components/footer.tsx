import React from "react";
import Container from "./container";
import Link from "./lib/link";

interface FooterHeaderProps {
  title: string;
}

function FooterHeader(props: FooterHeaderProps) {
  const { title } = props;

  return <h5 className="mb-5 font-medium text-2xl">{title}</h5>;
}

interface FooterParagraphProps {
  children: React.ReactNode;
}

function FooterParagraph(props: FooterParagraphProps) {
  const { children } = props;

  return <p className="mb-5">{children}</p>;
}

export default function Footer() {
  return (
    <div className="text-slate-300">
      <Container>
        <>
          <FooterHeader title="About" />
          <FooterParagraph>
            By: Yuvraj Singh, Urvashi Singh, Mohit Kumar
          </FooterParagraph>
          
        </>
      </Container>
    </div>
  );
}

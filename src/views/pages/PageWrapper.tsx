import React, { ReactNode, useEffect, useRef } from "react";
import { Footer, Header } from "../layout";
import gsap from "gsap";

export interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pageContainer = useRef(null);
  useEffect(() => {
    if (pageContainer.current) {
      gsap.from(pageContainer.current, { autoAlpha: 0 });
    }
  }, [pageContainer]);
  return (
    <div ref={pageContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

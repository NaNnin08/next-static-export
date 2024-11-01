"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import React, { Suspense } from "react";

const Callback = () => {
  const params = useSearchParams();
  const link = params?.get("link") ?? "";
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && link) {
      initialized.current = true;

      const isMobile = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (isMobile()) {
        const url = document.getElementsByTagName("a")[0];
        url.href = link;
        url.target = "_blank";

        url.click();

        window.close();
      } else {
        window.location.href = `${link}#`;
      }
    }
  }, [link]);

  return (
    <>
      Processing link...
      <a href={link} target="_blank"></a>
    </>
  );
};

const page = () => {
  return (
    <Suspense>
      <Callback></Callback>
    </Suspense>
  );
};

export default page;

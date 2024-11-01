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
        const url = document.createElement("a");
        url.href = link;
        url.target = "_blank";

        document.body.appendChild(url);
        url.click();

        document.body.removeChild(url);
        window.close();
      } else {
        window.location.href = `${link}#`;
      }
    }
  }, [link]);

  return <div>Processing link... </div>;
};

const page = () => {
  return (
    <Suspense>
      <Callback></Callback>
    </Suspense>
  );
};

export default page;

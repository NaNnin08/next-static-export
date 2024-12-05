"use client";
import React from "react";

const MainComponent = () => {
  const loginInstagram = () => {
    const clientId = "";
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/callback/instagram` || ""
    );
    const scope = encodeURIComponent("instagram_business_basic");
    // const state = encodeURIComponent('secureRandomState');

    const authUrl = `/oauth/authorize?enable_fb_login=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`; //&state=${state}
    const uriAuthUrl = encodeURIComponent(authUrl);
    const width = 600;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      `${window.location.origin}/redirect?link=${encodeURIComponent(
        `https://instagram.com/accounts/login/?source=webapp&force_classic_login&next=${uriAuthUrl}`
      )}`,
      "Instagram Login",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <div>
      <div className="relative h-3/4 min-h-[480px] w-[980px] max-w-[1440px] lg:min-h-[560px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/HSeic39Pu5c?autoplay=1&controls=0&loop=1&playlist=HSeic39Pu5c`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      <button onClick={loginInstagram}>CLICK HERE</button>
    </div>
  );
};

export default MainComponent;

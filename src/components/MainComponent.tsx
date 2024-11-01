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
      <button onClick={loginInstagram}>CLICK HERE</button>
    </div>
  );
};

export default MainComponent;

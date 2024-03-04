import React from "react";
import LogoSrc from "../../assets/TalentusLogo.jpg";

function Logo() {
  return (
    <div className="bg-[--third] w-[300px] h-[300px] grid place-items-center bg-white rounded-full overflow-hidden shadow-[0px_0px_15px_rgba(141,141,141,.6)] my-[8em] mx-auto md:my-0">
      <img width={200} height={200} src={LogoSrc} alt="Talentus Logo" />
    </div>
  );
}

export default Logo;

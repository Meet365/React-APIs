import { useState } from "react";

function AboutServices() {
  const [isBlurred, setIsblurred] = useState(false);

  function handleClick(){
    setIsblurred(!isBlurred);
  };

  return (
    <>
      <div className="relative inline-block">
        <img
          src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
          alt="iamge"
          className={`h-[350px] m-4 rounded-2xl ${
            isBlurred ? "blur-ms" : " "
          } cursor-pointer`}
          onClick={handleClick}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-xl font-semibold transition-opacity duration-300 ${
            isBlurred ? "opacity-100" : "opacity-0"
          }`}
        >
          Your Text Here
        </div>
      </div>
    </>
  );
}

export default AboutServices;

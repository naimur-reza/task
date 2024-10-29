import reader from "../assets/reader.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Reader = () => {
  const readerRef = useRef(null);

  useGSAP(() => {
    gsap.from(readerRef.current, {
      rotate: 360,
      duration: 8,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative">
      <img className="w-[700px] mx-auto" src={reader} alt="" />

      <div
        ref={readerRef}
        className="inset-0 bg-reader-bg to-blue-800/40 absolute -translate-x-1/2 top-20   z-20"
      ></div>

      <div className="absolute top-1/2 text-center h-full w-full text-white space-y-3 py-5 z-50">
        <p>Research and reading</p>{" "}
        <h1 className="text-4xl font-semibold">Never lose information</h1>
        <p>
          Collect your web snippets, Kindle highlights and important links – all
          in one place. Then quickly find them again from any device.
        </p>
      </div>
    </div>
  );
};

export default Reader;

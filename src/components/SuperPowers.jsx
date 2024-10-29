import { useGSAP } from "@gsap/react";
import whiteBg from "../assets/whitebg.png";
import gsap from "gsap";
import { useRef } from "react";

const SuperPowers = () => {
  const pathRefs = useRef([]);

  useGSAP(() => {
    gsap.from(".outer-box", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(pathRefs.current, {
      strokeDashoffset: 0,
      duration: 3,
      stagger: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen   flex items-center justify-center">
      <div
        style={{
          background: `url(${whiteBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRight: "1px solid",
          borderImage:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15)) 1 100%",
        }}
        className="h-[300px] w-[400px] rounded-lg relative text-white/40"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M200,150 Q100,100 100,200"
            className="stroke-purple-500/40 fill-none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M200,150 Q300,50 300,150"
            className="stroke-blue-500/40 fill-none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M200,150 Q150,50 100,100"
            className="stroke-green-500/40 fill-none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M200,150 Q250,200 300,50"
            className="stroke-orange-500/40 fill-none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>

        {/* Center */}
        <div
          data-text="Reflect"
          className="w-[40px] h-[40px] bg-purple-500/10 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outer-box-purple outer-box  shadow-inner-purple-glow "
        ></div>

        {/* Bottom Left */}
        <div
          data-text="The power of..."
          className="w-[35px] h-[35px] bg-green-500/10 rounded-full absolute left-[25%] bottom-[30%] -translate-x-1/2 translate-y-1/2 outer-box outer-box-green shadow-inner-green-glow"
        ></div>

        {/* Top Left */}
        <div
          data-text="Alex MacCaw"
          className="w-[35px] h-[35px] bg-blue-500/10 rounded-full absolute left-[25%] top-[30%] -translate-x-1/2 -translate-y-1/2 outer-box outer-box-blue shadow-inner-blue-glow "
        ></div>

        {/* Middle Left */}

        <div
          data-text="Saving websites"
          className="w-[35px] h-[35px] bg-yellow-500/10 rounded-full absolute right-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 outer-box outer-box-yellow shadow-inner-yellow-glow"
        ></div>

        {/* Top Right */}

        <div
          data-text="Tips and tricks"
          className="w-[35px] h-[35px]   rounded-full absolute right-[20%] top-[15%] translate-x-1/2 -translate-y-1/2 outer-box outer-box-pink shadow-inner-pink-glow"
        ></div>
      </div>
    </div>
  );
};

export default SuperPowers;

import React from "react";

const Hero = () => {
  return (
    <section className="h-[300vh]">
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex flex-col justify-center  sm:mt-32">
        <div>
          <h1 className="text-center font-semibold text-4xl md:text-[54px] mb-2 sm:mb-5">
            We Scale The Unscalable
          </h1>
          <h2 className="text-center text-primary font-semibold text-xl md:text-4xl animate-pulse">
            Ideate - Incubate - Accelerate
          </h2>
        </div>
        <div className="mt-14 sm:mt-24 w-full bg-gradient-to-r from-secondary via-current to-primary p-1 rounded-2xl">
          <div className="bg-[#030014] p-4 py-10 sm:p-14 rounded-2xl shadow-2xl shadow-primary/30">
            <h2 className="text-center text-white font-semibold text-2xl md:text-3xl mb-10">
              Powering Global Web3 Growth
            </h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              <span className="text-center space-y-2 sm:space-y-4">
                <h2 className="font-semibold tracking-wide text-4xl sm:text-6xl text-secondary">
                  50+
                </h2>
                <h4 className="font-semibold text-lg sm:text-2xl">Projects</h4>
              </span>
              <span className="text-center space-y-2 sm:space-y-4">
                <h2 className="font-semibold tracking-wide text-4xl sm:text-6xl text-secondary">
                  $20M+
                </h2>
                <h4 className="font-semibold text-lg sm:text-2xl">Raised</h4>
              </span>
              <span className="text-center space-y-2 sm:space-y-4">
                <h2 className="font-semibold tracking-wide text-4xl sm:text-6xl text-secondary">
                  $2B+
                </h2>
                <h4 className="font-semibold text-lg sm:text-2xl">Volumes</h4>
              </span>
              <span className="text-center space-y-2 sm:space-y-4">
                <h2 className="font-semibold tracking-wide text-4xl sm:text-6xl text-secondary">
                  2K+
                </h2>
                <h4 className="font-semibold text-lg sm:text-2xl">KOLs</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

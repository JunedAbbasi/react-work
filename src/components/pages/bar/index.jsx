import React from "react";

const Bar = () => {
  return (
    <>
      <div class="w-1/2 h-80 bg-black px-10 py-8 rounded m-auto">
        <div className="text-white text-uppercase text-lg font-bold  pb-3">
          <p className="text-red-500">my skill</p>
        </div>
        <div className="w-full grid grid-cols-2 pb-2 text-white text-uppercase">
          <div>
            <p>react js</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400">90%</p>
          </div>
        </div>
        <div class="progress1 bg-white progress-moved1 rounded-full">
          <div class="progress-bar1 h-1.5 w-5/6 rounded-full" style={{background:"linear-gradient(to left, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)", animation: "progressAnimation 4s"}}></div>
        </div>

        <div className="w-full grid grid-cols-2 mt-4 pb-2 text-white text-uppercase">
          <div>
            <p>html</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400">60%</p>
          </div>
        </div>
        <div class="progress1 bg-white progress-moved2 rounded-full">
          <div class="progress-bar2 h-1.5 w-3/5 rounded-full " style={{background:"linear-gradient(to left, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)", animation: "barAnimation 4s"}}></div>
        </div>

        <div className="w-full grid grid-cols-2 mt-4 pb-2 text-white text-uppercase">
          <div>
            <p>css</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400">83%</p>
          </div>
        </div>
        <div class="progress1 bg-white progress-moved3 rounded-full">
          <div class="progress-bar3 h-1.5 w-3/4 rounded-full" style={{background:"linear-gradient(to left, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)", animation: "lastAnimation 4s"}}></div>
        </div>
      </div>
      
    </>
  );
};

export default Bar;

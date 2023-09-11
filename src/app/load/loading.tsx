export default function Loading() {
  return (
    <main className="text-center h-full w-full flex justify-center items-center ">
      <div className="text-black max-w-full rounded-xl bg-[#2F82FF] max-h-full w-full flex flex-row flex-nowrap items-center gap-5 overflow-hidden">
        <p className="px-5 text-[34px] text-center w-40 text-white font-bold">
          รายการสินค้าแนะนำ
        </p>
      {Array.from({length: 20}, (_, i)=> i + 1).map((id) => {return (
        <div
                    key={id}
                    className={`m-3 flex  cursor-pointer w-[200px] bg-white rounded-xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
                  >
                    <div className="animate-pulse card w-[180px]" style={{animationDelay: `${id*0.2}s`}}>
                        <div className="rounded-xl bg-[#676767] px-2 mix-blend-multiply mt-1  w-full h-[150px]"></div>
                      <div className=" text-black p-4 flex flex-col gap-2">
                        <div className=" w-20 h-5 bg-[#676767]"></div>
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-20 h-5 bg-[#676767]"></div>
                          <div className="w-20 h-5 bg-[#676767]"></div>
                        </div>
                      </div>
                    </div>

        </div>
      )})}
      </div>
    </main>
  );
}

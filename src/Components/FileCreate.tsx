import AktenInfo from "./AktenInfo";
import GrundstückVertrag from "./Grundstuck";


export default function FileCreate() {
  return (
    <div className=" overflow-scroll no-scrollbar w-[1000px] h-full mt-14">
        <div className=" flex flex-row w-[1000px] h-96 border-2 border-gray-100 my-5 rounded-lg shadow-lg">
          <AktenInfo/>
        </div>
        <div className=" w-[1000px] h-[528px] border-2 border-gray-100 my-5 rounded-lg shadow-lg">
          <GrundstückVertrag/>
        </div>
        <div className=" w-[1000px] h-60 border-2 border-gray-100 my-5 rounded-lg shadow-lg">

        </div>
        <div className=" w-[1000px] h-60 border-2 border-gray-100 my-5 rounded-lg shadow-lg">

        </div>
    </div>
  )
}

import { useForm, SubmitHandler } from "react-hook-form";

enum AlmosenkastenEnum {
  Ja = "Ja",
  Nein = "Nein",
}

interface IFormAktenInfo {
  Stadtbezirk: number;
  Änderung: number;
  Kennziffer: number;
  AktenBegin: number;
  Heftnummer: number;
  AlmosenKasten: string;
}

export default function AktenInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormAktenInfo>();

  const onSubmit: SubmitHandler<IFormAktenInfo> = (data) => console.log(data);

  // max-w-lg w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6
  return (
    <div className="  mx-w-lg w-full bg-white drop-shadow-md hover:drop-shadow-xl rounded-lg p-7 space-y-6">
      <h2 className=" flex justify-center text-lg font-bold text-gray-600 mb-1  ">
        Akteninformationen
      </h2>
      <h1 className=" text-base font-bold text-gray-600 mb-1 ">
        Aktenidentifikation
      </h1>
      <form className=" p-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="  grid grid-rows-2 gap-8 grid-flow-col">
          <div className=" flex flex-col ">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Stadtbezirk (Gemarkung)
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="number"
              {...register("Stadtbezirk", { min: 1, max: 1000 })}
            />
          </div>
          <div className=" flex flex-col ">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Letzte Änderung
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1"
              type="date"
              {...register("Änderung")}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Kennziffer
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1"
              type="number"
              {...register("Kennziffer", { min: 1, max: 1000 })}
            />
          </div>
          <div className="  flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Aktenbeginn
            </label>
            <input
              className="  border rounded-md bg-white px-3 py-1"
              type="date"
              {...register("AktenBegin")}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Aktuelle Heftnummer
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1"
              type="number"
              {...register("Heftnummer", { min: 1, max: 1000 })}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Almosenkasten
            </label>
            <select
              className=" border rounded-md bg-white px-3 py-1"
              {...register("AlmosenKasten")}
            >
              <option value="Ja">Ja</option>
              <option value="Nein">Nein</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
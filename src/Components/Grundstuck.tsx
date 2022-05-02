import { useForm, SubmitHandler } from "react-hook-form";

interface IFormGrundstückVertrag {
  Gemarkung: number;
  Flur: number;
  Flurstück: number | string;
  VertragsBeginn: number;
  Laufzeit: number | string;
  VertragsNummer: number;
  Anmerkung: string | number;
}

export default function GrundstückVertrag() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormGrundstückVertrag>();

  const onSubmit: SubmitHandler<IFormGrundstückVertrag> = (data) =>
    console.log(data);

  return (
    <div className="  mx-w-lg w-full bg-white drop-shadow-md hover:drop-shadow-xl rounded-lg p-7 space-y-6">
      <h2 className=" text-base font-bold text-gray-600 mb-1 ">Grunstück</h2>
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-rows-1 gap-8 grid-flow-col">
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Gemarkung
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="number"
              {...register("Gemarkung", {
                min: 1,
                max: 1000,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Flur
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="number"
              {...register("Flur", {
                min: 1,
                max: 1000,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Flurstück
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="Flurstück"
              {...register("Flurstück", { min: 1, max: 1000 })}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Vertragsbeginn
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="date"
              {...register("VertragsBeginn")}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Laufzeit
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="Laufzeit"
              {...register("Laufzeit")}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Vertragsnummer
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="number"
              {...register("VertragsNummer")}
            />
          </div>
          <div className="flex flex-col">
            <label className=" flex justify-center text-sm font-bold text-gray-600 mb-1">
              Anmerkung{" "}
            </label>
            <input
              className=" border rounded-md bg-white px-3 py-1 "
              type="text"
              {...register("Anmerkung")}
            />
          </div>
          <button type="submit">Weitere Grudstückbezeichnung anlegen</button>
        </div>
      </form>
    </div>
  );
}

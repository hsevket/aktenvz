import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileCreate from "../Components/FileCreate";
import MenuBar from "../Components/MenuBar";

import Navbar from "../Components/Navbar";

export default function FilePageLayout() {
  return (
    <BrowserRouter>
      <main className=" flex">
        <aside className=" shadow-2xl h-screen w-96 border-r border-gray-200 bg-gray-100">
          <div className="flex flex-row justify-around justify-items-center mt-3 mb-3">
            <img className="h-28 w-28" src="https://i.ibb.co/z8LNH49/favicon.png" alt="" />
            <h2 className=" self-center font-bold text-2xl">Akten-VZ</h2>
          </div>
          <Navbar />
        </aside>
        <section className="flex flex-col justify-between justify-items-center items-center h-screen w-screen">
          <MenuBar/>
          <Routes>
            <Route path="/" element={<FileCreate />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}
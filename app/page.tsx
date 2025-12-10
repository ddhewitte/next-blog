import Image from "next/image";
import Card from "./components/card/Card";
import { title, subTitle } from "./lib/data";

export default function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          {title}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">{subTitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card />
      </div>
    </>
    
  );
}

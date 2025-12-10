import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
        Welcome to Modern Blog
      </h1>
      <p className="text-slate-600 max-w-2xl mx-auto">Discover stories, thinking, and expertise from writers on any topic.</p>
    </div>
  );
}

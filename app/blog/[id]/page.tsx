import { getPostById } from "@/app/lib/api";
import Link from "next/link";

type paramsId = {
    params: Promise<{
        id : string;
    }>
}

export default async function BlogDetail({ params }: paramsId) {
  const {id} = await params;

  const res = await getPostById(id);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="max-w-4xl mx-auto">

        <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors group">
          <span><Link href="/" >Back to all posts</Link></span>
        </button>

        <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
            <img
              src={res.image}
              alt="The Art of Typography in Modern UI"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                Best Article
              </span>
            </div>

            <h1 className="text-slate-900 mb-6">
              {res.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span>Admin</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Nov 5, 2025</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-slate-700 leading-relaxed mb-4" style={{ whiteSpace: "pre-line" }}>
                {res.content}
              </p>
            </div>
          </div>
        </article>

      </div>
    </main>
  );
}

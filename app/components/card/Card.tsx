import { Post, getPosts } from "@/app/lib/api"

export default async function Card() {

    const getPostLists = await getPosts();

    return (
    <>
        { getPostLists.slice(0,6).map( (post : Post) => (
            <article key={post.id} className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&amp;h=600&amp;fit=crop"
                alt="The Future of Web Development in 2025"
                className="h-full w-full object-cover transition-transform duration-800 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    Technology
                </span>
                </div>
                <h2 className="mb-3 line-clamp-2 text-slate-900 transition-colors group-hover:text-blue-600">
                    { post.title }
                </h2>
                <p className="mb-4 line-clamp-3 text-slate-600">
                    { post.body }
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                
                    <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-1">
                    <span>Nov 10, 2025</span>
                    </div>
                </div>
                </div>
            </div>
            </article>
        ))}
        
    </>
  )
}

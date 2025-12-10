export type Post = {
    id: number, 
    title: string;
    content: string;
    image: string;
}

export async function getPosts(): Promise<Post[]>{
    const res = await fetch(`${process.env.API_ENDPOINT}`, { cache: "no-store"});

    if(!res.ok) throw new Error("Failed to fetch!");

    return await res.json()
}
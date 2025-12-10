export type Post = {
    id: string, 
    title: string;
    content: string;
    image: string;
}

export async function getPosts(): Promise<Post[]>{
    const res = await fetch(`${process.env.API_ENDPOINT}`, { cache: "no-store"});

    if(!res.ok) throw new Error("Failed to fetch!");

    return await res.json()
}

export async function getPostById(id: string): Promise<Post> {
    const res = await fetch(`${process.env.API_ENDPOINT}`, { next: { revalidate: 60 }});
    if(!res.ok) throw new Error("Failed to fetch!");
    const data = await res.json();
    const filteredData = data.find((detail : Post) => detail.id === id);
    console.log(filteredData);
    return filteredData;
}
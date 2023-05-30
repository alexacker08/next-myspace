import Container from "@/components/Container";

interface Post {
    title: string,
    content: string,
    slug: string
}

interface Props {
    params: { slug: string }
}

export default async function BlogPage({ params }: Props){

    const posts: Post[] = await fetch('http://localhost:3000/api').then(res => res.json())
    const post = posts.find((post) => post.slug === params.slug)!

    return (
        <div className="blog-page pt-10 pb-10">
            <Container>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </Container>
        </div>
    )
}
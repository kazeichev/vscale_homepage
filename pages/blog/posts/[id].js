function Post({post}) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: {id: post.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    return {props: {post}}
}

export default Post;
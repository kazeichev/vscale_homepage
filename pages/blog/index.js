import Link from 'next/link'

function Blog({posts}) {
    return (
        <>
            <h1>Блог</h1>
            <h3>Последние статьи</h3>

            {posts.map((post) => {
                return (
                    <Link href={'/blog/posts/' + post.id} key={post.id}>
                        <a style={{display: "block"}}>{post.title}</a>
                    </Link>
                );
            })}
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    };
}

export default Blog;
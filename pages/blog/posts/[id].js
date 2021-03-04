import {useRouter} from 'next/router'

function Post({post}) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export async function getServerSideProps() {
    const router = useRouter();
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`);
    const data = await res.json();

    console.log(data)
    return {
        props: {
            post: data
        }
    };
}

export default Post;
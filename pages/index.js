import Image from "next/image";
import BlogItem from "../components/BlogItem";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout title="Главная">
      <h1>Blog</h1>
      <div className="posts">
        {posts.map((post) => (
          <BlogItem title={post.title} description={post.description} />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {

  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  return {
    props: {
      posts: [],
    },
  };
};

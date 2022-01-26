import Link from "next/link";

const BlogItem = ({ title, description, id }) => {
  return (
    <div className="blog-item">
      <h5>{title}</h5>
      <p>desciptions</p>
      <Link href="/blog/{id}" as={`/blog/{id}`}>
        <a>Прочитать</a>
      </Link>
    </div>
  );
};
export default BlogItem;

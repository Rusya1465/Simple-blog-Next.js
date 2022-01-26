import Head from "next/head";
import Link from "next/link";
const Layout = ({ title, desciption = "", children }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={"Simple blog next.js"} />{" "}
        <meta property="og:description" content={"Simple blog next.js"} />{" "}
      </Head>{" "}
      <header>
        <img src="../public/email.png" />
        <Link href="/">
          <a> Главная </a>
        </Link>
      </header>
      <div className="container">{children}</div>
      <footer> 2021 Simple Blog Next.js </footer>{" "}
    </>
  );
};

export default Layout;

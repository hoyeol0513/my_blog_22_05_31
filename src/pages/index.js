import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/test">테스트</Link>
      <Link to="/test-space">테스트-스페이스</Link>
      <title>Home Page</title>
      <h1>Welcome my Home Page!!!</h1>
    </main>
    // <Layout pageTitle="Home Page">
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </Layout>
  );
};

export default IndexPage;

import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <main>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/test">테스트</Link>
      <Link to="/test-space">테스트-스페이스</Link>
      <title>자기소개</title>
      <h1>Page for about Me</h1>
    </main>
    // <Layout pageTitle="About Me">
    //   <h1>page for About Me</h1>
    // </Layout>
  );
}

export default AboutPage;

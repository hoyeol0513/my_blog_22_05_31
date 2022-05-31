import React from "react";
import Layout from "../components/layout";

function TestPage() {
  return (
    <main>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/test">테스트</Link>
      <Link to="/test-space">테스트-스페이스</Link>
      <title>Test Page</title>
      <h1>Page for Test</h1>
    </main>
  );
}

export default TestPage;

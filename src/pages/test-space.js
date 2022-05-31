import { Link } from "gatsby";
import React from "react";

function TestspacePage() {
  return (
    <main>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/test">테스트</Link>
      <Link to="/test-space">테스트-스페이스</Link>
      <title>Test Page</title>
      <h1>Page for Test-space</h1>
    </main>
  );
}

export default TestspacePage;

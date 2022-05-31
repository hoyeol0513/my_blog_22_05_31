import { Link } from "gatsby";
import React, { Children } from "react";

function Layout({ children }) {
  return(
    <>
      <main>
      {/* 상단 (링크) */}
        <div style={{display : "flex", gap: 20}}>
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
          <Link to="/test">테스트</Link>
          <Link to="/test-space">테스트-스페이스</Link>
          <Link to="/vision">비전</Link>
        </div>
        {/* 빈칸 (children 쓰는건 외우기)*/}
        {children}

        {/* 하단 */}
        <div>Copyrights All Rights</div>
      </main>
    </>
    
    


  )

}
export default Layout
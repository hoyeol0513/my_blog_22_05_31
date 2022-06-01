import { Link } from "gatsby";
import React, { Children } from "react";

// `./` 은 나랑 같은 폴더라는 뜻
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    <>
      <div className={container}>
        <title>{pageTitle}</title>
        {/* 상단 (링크) -> nav로 링크넣는다 = 가독성 좋음*/}
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                홈
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                소개
              </Link>
            </li>
          </ul>
        </nav>
        {/* 메인내용 (children 쓰는건 외우기)*/}
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>

        {/* 하단 */}
        <div>Copyrights All Rights</div>
      </div>
    </>
  );
}
export default Layout;

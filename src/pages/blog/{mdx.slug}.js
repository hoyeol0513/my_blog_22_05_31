import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import { MDXProvider } from "@mdx-js/react";

const BlogPost = ({ data }) => {
  /* 이미지 없는 글에 대한 처리 */
  //  data.mdx.frontmatter.hero_image 에 이미지가 null이면 false로 && 연산이 진행되지 않음.
  // 고로 && 오른쪽의 getImage(data.mdx.frontmatter.hero_image) 도 진행되지 않음.
  const image =
    data.mdx.frontmatter.hero_image &&
    getImage(data.mdx.frontmatter.hero_image);
  const tags = data.mdx.frontmatter.tags;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* 이미지 없는 글에 대한 처리 (위에 &&연산과 동일) */}
      {image && (
        // 안에서 두개 이상의 태그를 쓰려면 <></> 이 필요함. (한개는 필요없음.)
        <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={data.mdx.frontmatter.hero_image_credit_link}
            >
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </>
      )}
      <hr />
      <MDXProvider
        components={{
          pre: CodeBlock,
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
      <hr />
      TAGS : {tags && tags.join(", ")}
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      body
    }
  }
`;
export default BlogPost;

import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
const BlogPost = ({ data }) => {
  /* //hero_image안에 뭐가 들어있는지 확인하기 위한 console
  console.log(
    `data.mdx.frontmatter.hero_image : ${data.mdx.frontmatter.hero_image}`
  );
  */
  /* 이미지 없는 글에 대한 처리 */
  //  data.mdx.frontmatter.hero_image 에 이미지가 null이면 false로 && 연산이 진행되지 않음.
  // 고로 && 오른쪽의 getImage(data.mdx.frontmatter.hero_image) 도 진행되지 않음.
  const image =
    data.mdx.frontmatter.hero_image &&
    getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* 이미지 없는 글에 대한 처리 (위에 &&연산과 동일) */}
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a
              target="_blank"
              href={data.mdx.frontmatter.hero_image_credit_link}
            >
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </>
      )}
      <hr />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      }
      body
    }
  }
`;
export default BlogPost;

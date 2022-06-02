module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "이 사이트에 개발자 강호열의 개발일지가 담겨있습니다.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

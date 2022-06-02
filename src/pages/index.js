import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>Home Page</title>
      <p>Welco me my Home Page!!!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Clifford.jpg"
      />
      <hr />
    </Layout>
  );
};

export default IndexPage;

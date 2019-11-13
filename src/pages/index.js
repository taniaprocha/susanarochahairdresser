import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section" id="section-photos">Hi people</section>
    <section className="section" id="section-services">
      Hi people
    </section>
    <section className="section" id="section-where"></section>
  </Layout>
);


export default IndexPage;

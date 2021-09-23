import React from "react";
import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

//Contentful Blog Post path
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blogPosts" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

//getting blog post
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPosts",
    "fields.slug": params.slug,
  });

  return {
    props: {
      blogPosts: items[0],
    },
  };
}

const SinglePost = ({ blogPosts }) => {
  const {
    title,
    author,
    date,
    post,
    category,
    bannerImage,
    publisedDate,
    slug,
  } = blogPosts.fields;
  return (
    <>
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <div>
          <div className="singleBlogMain">
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "top",
              }}
              container
              className="singleBlogInner"
            >
              <Grid item className="singleBlogTextDiv">
                <div className="singleBlogText" text={["Pricing", "Go Dark"]}>
                  {title}
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginBottom: "12rem" }} className="singlePostMain">
            <Grid container className="singlePostInner">
              {/* <div className="singlePostImage">
                <Image
                  src={`https://${bannerImage.fields.file.url}`}
                  width={800}
                  height={500}
                />
              </div> */}
              <div className="singlePostDetail">
                <div className="singlePostDetailH">
                  <div className="postCat">
                    <span className="postDate">{publisedDate}</span>
                  </div>
                </div>
                <div
                  className="singlePostDetailB"
                  style={{ lineHeight: "3rem" }}
                >
                  {documentToReactComponents(post)}
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;

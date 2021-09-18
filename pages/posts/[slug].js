import React from "react";
import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";

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
    <div>
      <div className="blogMain">
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
          }}
          container
          className="blogInner"
        >
          <Grid item className="blogTextDiv">
            <div className="blogText" text={["Pricing", "Go Dark"]}>
              {title}
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: "12rem" }} className="postMain">
        <Grid container className="postInner">
          <div className="postImage">
            <Image
              src={`https://${bannerImage.fields.file.url}`}
              width={800}
              height={500}
            />
          </div>
          <div className="postTextDiv">
            <div className="postCatDiv">
              <div className="postCat">
                <span className="postDate">{publisedDate}</span>
              </div>
            </div>
            <div style={{ lineHeight: "3rem" }}>
              {documentToReactComponents(post)}
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default SinglePost;

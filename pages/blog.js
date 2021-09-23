import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

//Contentful Blog Post
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const posts = await client.getEntries({ content_type: "blogPosts" });

  return {
    props: {
      blogPosts: posts.items,
      posts: posts,
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "98%",
      color: "white",
    },
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const BlogHome = ({ blogPosts, posts }) => {
  const classNamees = useStyles();

  return (
    <>
      <Head>
        <title>Blog - GoDark</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
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
                {" "}
                Blog{" "}
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ marginBottom: "12rem" }} className="postMain">
          <Grid container className="postInner">
            {/* mappibg through post */}

            {blogPosts.map((post) => (
              <Grid key={post.sys.id} item md={5} xs={12} className="postDiv">
                <img
                  className="postImage"
                  src={`${post.fields.Thumbnail.fields.file.url}`}
                  style={{ width: "100%" }}
                />
                <div className="postTextDiv">
                  <div className="postCatDiv">
                    <div className="postCat">
                      {post.fields.category} |{" "}
                      <span className="postDate">{post.sys.createdAt}</span>
                    </div>
                  </div>
                  <div className="postTitle">{post.fields.title}</div>
                  <div className="postMsg">
                    {/* {post.fields.post} */}
                    <Link
                      className="postReadMoreBtn"
                      href={`/posts/${post.fields.slug}`}
                    >
                      <a>Read More</a>
                    </Link>
                  </div>
                  <div id="postAuthorDiv">
                    <div className="postAuthor">{post.fields.author} </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default BlogHome;

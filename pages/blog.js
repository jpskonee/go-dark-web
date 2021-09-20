import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
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

const BlogHome = ({ blogPosts }) => {
  console.log(blogPosts);

  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

  const classNamees = useStyles();

  return (
    <Layout title="Blog">
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#020205" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

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
                  <Image
                    className="postImage"
                    src={`https://${post.fields.Thumbnail.fields.file.url}`}
                    width={600}
                    height={400}
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
                        Read More
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
          <Footer />
        </Parallax>
      </div>
      <div className="audio-player">
        <Plyr
          source={{
            type: "audio",
            sources: [
              {
                src: "/audio.mp3",
                type: "audio/mp3",
              },
            ],
          }}
          options={{
            controls: ["play", "mute", "volume"],
            loop: { active: true },
          }}
          ref={plyr}
        />
      </div>
    </Layout>
  );
};

export default BlogHome;

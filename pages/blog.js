import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

//env variables
const cSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const cAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;



//Contentful Blog Post
import { createClient } from "contentful";
import FooterMenu from "../components/layout/FooterMenu";

export async function getStaticProps() {
  const client = createClient({
    space: cSpaceId,
    accessToken: cAccessToken,
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
        <link
          rel="preload"
          href="/fonts/Neototem.ttf"
          as="font"
          crossOrigin=""
        />
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
              <ReactTypingEffect className="blogText" text={["Blog", "Blog"]} />
            </Grid>
          </Grid>
        </div>

        <div className="postMain">
          <Grid container className="postInner">
            {/* mappibg through post */}

            {blogPosts.map((post) => (
              <Grid key={post.sys.id} item md={5} xs={12} className="postDiv">
                <Link href={`/posts/${post.fields.slug}`}>
                  <img
                    className="postImage"
                    src={`${post.fields.Thumbnail.fields.file.url}`}
                    style={{ width: "100%" }}
                  />
                </Link>
                <div className="postTextDiv">
                  <div className="postCatDiv">
                    <div className="postCat">
                      {post.fields.category} |{" "}
                      <span className="postDate">{post.sys.createdAt}</span>
                    </div>
                  </div>
                  <Link href={`/posts/${post.fields.slug}`}>
                    <div className="postTitle">{post.fields.title}</div>
                  </Link>
                  <div className="postMsg">
                    {/* {post.fields.post} */}
                    <Link href={`/posts/${post.fields.slug}`}>
                      <a className="postReadMoreBtn">Read</a>
                    </Link>
                  </div>
                  <div id="postAuthorDiv">
                    <div className="postAuthor">{post.fields.author} </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
          <FooterMenu />
        </div>
      </div>
    </>
  );
};

export default BlogHome;

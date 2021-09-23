import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "plyr-react/dist/plyr.css";
import { useRef, useState } from "react";
import Footer from "../components/layout/Footer";
import emailjs from "emailjs-com";

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

const composePost = () => {
  const parallax = useRef(null);

  const classNamees = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
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
            <Grid container className="blogInner">
              <Grid item className="blogTextDiv">
                <div className="blogText" text={["Pricing", "Go Dark"]}>
                  {" "}
                  Blog | Admin{" "}
                </div>
              </Grid>
            </Grid>
          </div>

          <div
            style={{
              marginBottom: "12rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
            className="postMain"
          >
            <Grid container className="postInner">
              <Grid
                item
                md={6}
                xs={12}
                style={{ background: "white" }}
                className="postDiv"
              >
                <form
                  style={{
                    borderRadius: "1rem",
                    padding: "1rem",
                    margin: "3rem auto",
                    color: "black",
                  }}
                  className={`${classNamees.root} formPart`}
                  noValidate
                  autoComplete="off"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <h1 style={{ color: "black" }}> Compose a new Blog</h1>
                  <div style={{ color: "black", lineHeight: "3rem" }}>
                    Post Banner <input type="file" onChange={handleImgBanner} />{" "}
                    <br />
                    Post Icon <input type="file" onChange={handleImgIcon} />
                  </div>

                  <TextField
                    id="outlined-basic"
                    label="Enter Blog Title"
                    variant="outlined"
                    fullWidth="true"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <textarea
                    style={{
                      padding: "1rem",
                      fontFamily: "serif",
                      color: "black",
                    }}
                    rows="16"
                    placeholder="Type a blog.."
                    value={msg}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    fullWidth="true"
                    value={category}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    fullWidth="true"
                    value={author}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <div
                    style={{ width: "60%", marginTop: "2rem", color: "white" }}
                  >
                    <Button
                      style={{
                        color: "white",
                        background: "red",
                        padding: "0.3rem 1rem",
                        letterSpacing: "0.3rem",
                        fontSize: "1.2rem",
                      }}
                      variant="outlined"
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </Grid>
              <Grid
                item
                md={5}
                xs={12}
                style={{ background: "white", color: "black" }}
                className="postDiv"
              >
                <h1 style={{ color: "black", padding: "1rem  0" }}> Preview</h1>
                <div className="postImage">
                  <img src="" alt="" />
                </div>
                <div className="postTextDiv">
                  <div className="postCatDiv">
                    <div className="postCat">
                      Categoy | <span className="postDate">12/09/2021</span>
                    </div>
                  </div>
                  <div className="postTitle">New Tech Revolution</div>
                  <div className="postMsg">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software.
                    <span className="postReadMoreBtn">Read more</span>
                  </div>
                  <div id="postAuthorDiv">
                    <div className="postAuthor">Author</div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </Parallax>
      </div>
    </>
  );
};

export default composePost;

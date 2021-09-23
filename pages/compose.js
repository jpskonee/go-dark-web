import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "plyr-react/dist/plyr.css";
import { useRef, useState } from "react";
import Footer from "../components/layout/Footer";

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

  //handling blog contents

  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState(null);
  const [author, setAuthor] = useState("");

  const [doneImgUpload, setDoneImgUpload] = useState(false);
  const [sentToDB, setSentToDB] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    await goDarkBlog.doc().set({
      title: title,
      msg: msg,
      img: image,
      category: category,
      author: author,
      time: new Date().toLocaleString(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setSentToDB(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  //Handle Banner image upload
  const handleImgBanner = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImage(await fileRef.getDownloadURL());
    setDoneImgUpload(true);
  };

  //Handle Icon image upload
  const handleImgIcon = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImage(await fileRef.getDownloadURL());
    setDoneImgUpload(true);
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

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import Footer from "../components/layout/Footer";
import GoogleMap from "../components/shared/GoogleMap";
import Head from "next/head";
import FooterMenu from "../components/layout/FooterMenu";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "98%",
      color: "white",
    },
  },
  textField: {
    color: "black",
    padding: "0.5rem",
    fontSize: "1rem",
    lineHeight: "2rem",
    fontFamily: "serif",
    width: "100%",
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Contact = () => {
  const parallax = useRef(null);
  const classNamees = useStyles();

  //sending email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.EMAILJS_SERVICE_ID}`,
        "godark_contact",
        e.target,
        `${process.env.EMAILJS_API_KEY}`
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Email sent Successfully!");
          } else {
            alert("Email can't be sent now, Try Again!");
          }
        },
        (error) => {
          alert("An Error Occured, Please Try Again");
          console.log(error.text);
        }
      );
    // e.target.reset();
  };

  const classes = useStyles();
  return (
    <>
      {" "}
      <Head>
        <link
          rel="preload"
          href="/fonts/Neototem.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Contact - GoDark</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <div className="contactMain">
          <div className="contactInner">
            <div>
              <GoogleMap />
            </div>
          </div>
        </div>

        <div className="formMain">
          <Grid className="formInner" container>
            <Grid item md={5} xs={12} className="textPart">
              <div className="textPartH">Contact Us</div>
              <div className="textPartB">
                <div> We are hackers, </div>
                <div> We are good people, </div>
                <div> We are here to help protect you. </div>
              </div>
            </Grid>
            <Grid md={1} />
            <Grid item md={6} xs={12}>
              <form
                style={{
                  borderRadius: "1rem",
                  padding: "1rem",
                  margin: "3rem auto",
                }}
                className={`${classNamees.root} formPart`}
                noValidate
                autoComplete="off"
                ref={form}
                onSubmit={sendEmail}
                method="POST"
              >
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  fullWidth={true}
                  name="name"
                  required
                  className={classes.textField}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth={true}
                  name="email"
                  required
                  className={classes.textField}
                />
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  fullWidth={true}
                  name="subject"
                  required
                  className={classes.textField}
                />
                <TextareaAutosize
                  placeholder="Compose a message..."
                  name="message"
                  required
                  maxRows={5}
                  minRows={4}
                  className={classes.textField}
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
          </Grid>
        </div>
        <FooterMenu />
      </div>
    </>
  );
};

export default Contact;

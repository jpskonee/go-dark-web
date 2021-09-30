import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "plyr-react/dist/plyr.css";
import { useRef, useState } from "react";
import Footer from "../components/layout/Footer";
import GoogleMap from "../components/shared/GoogleMap";
import Head from "next/head";
import FooterMenu from "../components/layout/FooterMenu";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import emailjs from "emailjs-com";
import AlertModal from "../components/shared/AlertModal";

//env variable
const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;
const servId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const gSheet = process.env.NEXT_PUBLIC_G_SHEET;

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
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlarmMsg] = useState({});

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //sending email
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    //sending to google sheet
    try {
      const res = await fetch(`${gSheet}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    //Sending to email.js
    await emailjs.sendForm(servId, "godark_contact", e.target, apiKey).then(
      (result) => {
        if (result.status === 200) {
          setAlert(true);
          setData({});
          setAlarmMsg({
            header: "Successfully Sent!",
            url: "https://websiteurl.org/wp-content/uploads/2020/10/Red-Check-Mark-Animated-Gif.gif",
            body: "Thanks for reaching out to us, We will get in touch with you shortly.",
          });
        } else {
          setAlert(true);
          setAlarmMsg({
            header: "Message Not Sent!",
            url: "https://cdn2.scratch.mit.edu/get_image/gallery/26181542_170x100.png",
            body: " Please check your connection and try again",
          });
          console.log(result.text);
        }
      },
      (error) => {
        setAlert(true);
        setAlarmMsg({
          header: "Message Not Sent!",
          url: "https://cdn2.scratch.mit.edu/get_image/gallery/26181542_170x100.png",
          body: " Please Try Later After some time.",
        });
        console.log(error.text);
      }
    );
    e.target.reset();
    setData("");
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

        <link rel="icon" href="/skull.png" />
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
              {alert && <AlertModal setAlert={setAlert} alertMsg={alertMsg} />}
              <form
                style={{
                  borderRadius: "1rem",
                  padding: "1rem",
                  margin: "3rem auto",
                }}
                className={`${classNamees.root} formPart`}
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
                  type="text"
                  required
                  className={classes.textField}
                  onChange={handleChange}
                  value={data.name}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth={true}
                  name="email"
                  type="email"
                  required
                  className={classes.textField}
                  onChange={handleChange}
                  value={data.email}
                />
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  fullWidth={true}
                  name="subject"
                  type="text"
                  required
                  className={classes.textField}
                  onChange={handleChange}
                  value={data.subject}
                />
                <TextareaAutosize
                  placeholder="Compose a message..."
                  name="message"
                  required
                  maxRows={5}
                  minRows={4}
                  className={classes.textField}
                  onChange={handleChange}
                  value={data.message}
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

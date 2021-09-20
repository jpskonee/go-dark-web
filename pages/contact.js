import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Loading from "../components/layout/Loading";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import GoogleMap from "../components/shared/GoogleMap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

const Contact = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

  const classNamees = useStyles();

  return (
    <Layout title="Contact">
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={2}>
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

          <div className="contactMain">
            <div className="contactInner">
              <div>
                <GoogleMap />
              </div>
            </div>
          </div>

          <div className="formMain">
            <Grid className="formInner" container>
              <Grid item md={6} xs={12} className="textPart">
                <div className="textPartH">Contact Us</div>
                <div className="textPartB">
                  <div> We are hackers, </div>
                  <div> We are good people, </div>
                  <div> We are here to help protect you. </div>
                </div>
              </Grid>
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
                >
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    fullWidth="true"
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
            </Grid>
          </div>
        </Parallax>
      </div>
      {/* <div className="audio-player">
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
      </div> */}
    </Layout>
  );
};

export default Contact;

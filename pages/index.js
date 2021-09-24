import { Grid } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import Footer from "../components/layout/Footer";
import Terminal from "../components/shared/Terminal";
import FooterMenu from "../components/layout/FooterMenu";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Home = () => {
  const parallax = useRef(null);
  console.log("home");

  return (
    <div
      className="home"
      style={{
        width: "100%",
        height: "100%",
        background: "#020205",
        marginBottom: "4rem",
      }}
    >
      {" "}
      <Head>
        <title> Home - GoDark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <span data-text="GO DARK" className="headerMain">
          <Grid container className="headerinner">
            <Grid item md={6} xs={12} className="headerText">
              <span data-text="GO DARK" className="title">
                GO DARK
              </span>
              <div className="headerdesp">
                Specializing in data discovery, investigative exploration, and
                helping you to disappear. When you want to know, we'll find it.
                <br /> When you want to go dark, <br /> we're here.
              </div>
              <Link href="/about">
                <div className="headerBtn">
                  <ReactTypingEffect
                    text={["Explore", "Disappear", "Discover"]}
                  />
                </div>
              </Link>
            </Grid>
            <Grid item md={6} xs={12}>
              <Image
                className="headerImage"
                src="/wheel.png"
                width={600}
                height={500}
              />
            </Grid>
          </Grid>
          <div className="headerHacker">
            <Image src="/figHacker.png" width={400} height={400} />
          </div>
        </span>
      </div>
      <div>
        <span data-text="GO DARK" className="functionMain">
          <Grid className="functioninner" container>
            <Grid item md={5}>
              <div className="functionImage">
                <Image src="/walkMan.gif" width={500} height={500} />
              </div>
            </Grid>
            <Grid className="functionText" item md={7}>
              <div>
                <div data-text="GO DARK" className="functionTextH">
                  Want to know <br /> more about you?
                </div>
                <div className="terminal">
                  <Terminal />
                </div>
              </div>
            </Grid>
          </Grid>
        </span>
      </div>
      <Footer />
      <FooterMenu />
    </div>
  );
};

export default Home;

import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import { Grid } from "@material-ui/core";
import Footer from "../components/layout/Footer";
import Terminal from "../components/shared/Terminal";
import { motion } from "framer-motion";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Home = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);
  const router = useRouter();

  const onMouseOver = (e) => {
    document.getElementById("earth_background-text").style.display = "block";
  };

  const onMouseLeave = (e) => {
    document.getElementById("earth_background-text").style.display = "none";
  };
  // here

  useEffect(() => {
    if (fullExperience) {
      plyr?.current?.plyr.play();
    }
  }, [plyr, fullExperience]);

  return (
    // <Layout title="Home">
    <div
      className="home"
      style={{ width: "100%", height: "100%", background: "#020205" }}
    >
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />

        <div>
          <span data-text="GO DARK" className="headerMain">
            <Grid container className="headerinner">
              <Grid item md={6} xs={12} className="headerText">
                <span data-text="GO DARK" className="title">
                  GO DARK
                </span>
                <div className="headerdesp">
                  orem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. ridiculus mus.{" "}
                  <br /> Donec quam felis,
                </div>
                <div
                  onClick={() => parallax.current.scrollTo(1)}
                  className="headerBtn"
                >
                  {" "}
                  <ReactTypingEffect
                    text={["Explore", "Disappear", "Discover"]}
                  />{" "}
                </div>
              </Grid>
              <Grid item md={6} xs={12} className="headerImage">
                <Image src="/wheel.png" width={600} height={500} />
              </Grid>
            </Grid>
            <div className="headerHacker">
              <Image src="/figHacker.png" width={800} height={600} />
            </div>
          </span>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
                  <div
                    onClick={() => parallax.current.scrollTo(2)}
                    className="terminal"
                  >
                    <Terminal />
                  </div>
                </div>
              </Grid>
            </Grid>
          </span>
        </motion.div>

        <Footer />
      </Parallax>

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

      {/* </Layout> */}
    </div>
  );
};

export default Home;

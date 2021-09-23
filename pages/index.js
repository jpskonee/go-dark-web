import { Grid } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Image from "next/image";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import Footer from "../components/layout/Footer";
import Terminal from "../components/shared/Terminal";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Home = () => {

  const parallax = useRef(null);



  return (
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

    </div>

  );
};

export default Home;

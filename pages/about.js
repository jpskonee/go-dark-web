import { Grid } from "@material-ui/core";
import Image from "next/image";
import "plyr-react/dist/plyr.css";
import ReactTypingEffect from "react-typing-effect";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const About = () => {
  return (
   
      <div
        className="home"
        style={{
          width: "100%",
          height: "100%",
          background: "#020205",
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bannerMain">
          <Grid container className="bannerInner">
            <Grid item className="bannerTextDiv">
              <ReactTypingEffect
                className="bannerText"
                text={["About Us", "Go Dark"]}
              />
            </Grid>
          </Grid>
        </div>

        <div className="aboutMain">
          <Grid container className="aboutInner">
            <Grid item md={12} className="aboutDesp">
              At Go-Dark, we strive to strengthen our customers’ information
              security through advanced reconnaissance, consulting, and
              defensive security services through Operational Security (OPSEC).
              Founded in 2020 by a group of hackers, people all over the world
              have taken their first steps to understanding what information
              about them is out there.
            </Grid>
            <Grid className="focusMain" item md={12} container>
              <Grid className="focusItem" item md={4}>
                <Image
                  src="/lock.gif"
                  width={150}
                  height={150}
                  className="focusImg"
                />
                <div className="focusText"> Operational Security (OPSEC)</div>
              </Grid>
              <Grid className="focusItem" item md={4}>
                <Image
                  className="focusImg"
                  src="/finger.gif"
                  width={300}
                  height={150}
                />
                <div className="focusText">
                  {" "}
                  Data Privacy and Infomation Control
                </div>
              </Grid>
              <Grid className="focusItem" item md={4}>
                <Image
                  src="/osint1.gif"
                  width={300}
                  height={150}
                  className="focusImg"
                />
                <div className="focusText">
                  {" "}
                  Open Source Intelligence (OSINT)
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="aboutMain">
          <Grid container className="aboutInner">
            <Grid container item md={12} sm={12} xs={12} className="topicDiv">
              <Grid md={5} sm={12} xs={12} item className="topicImage">
                <Image src="/osint1.gif" width={600} height={500} />
              </Grid>
              <Grid item md={7} sm={12} xs={12} className="topicText">
                We recognize that Open Source Intelligence (OSINT) is both a
                science and an art, which requires discretion and good judgment.
                Like any complex practice, finding information depends upon the
                ability of the artist to apply knowledge and tools in a way that
                achieves maximum effect. Information security involves tradeoffs
                between security, cost and operations. That’s why at Go-Dark we
                strive to understand your organization from a holistic
                perspective, taking into consideration your objectives and
                unique constraints
              </Grid>
            </Grid>

            <Grid container item md={12} sm={12} xs={12} className="topicDiv">
              <Grid md={5} sm={12} xs={12} item className="topicImage">
                <Image src="/finger.gif" width={450} height={300} />
              </Grid>
              <Grid item md={7} sm={12} xs={12} className="topicText">
                At the heart of the issue is Data Privacy. And although Data
                Privacy isn't a black and white matter or therefore a simple
                matter, Go-Dark believes that the individual deserves the
                opportunity to understand the information that is out there that
                pertains to that individual.
              </Grid>
            </Grid>
            <Grid container item md={12} sm={12} xs={12} className="topicDiv">
              <Grid md={5} sm={12} xs={12} item className="topicImage">
                <Image src="/lock.gif" width={450} height={400} />
              </Grid>
              <Grid item md={7} sm={12} xs={12} className="topicText">
                You also have a right to seek to control that information for
                such things as personal protection, removing information that
                seeks to harm your current opportunities in life, keeping your
                business and employees safe from leaked information, competitive
                disadvantages, or public embarrassment. Maybe you want internet
                anonymity and you want to disappear. Go-Dark can help.
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    
  );
};

export default About;

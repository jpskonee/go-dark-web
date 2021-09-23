import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import GoogleMap from "../components/shared/GoogleMap";

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
  const parallax = useRef(null);

  const classNamees = useStyles();

  return (
    <>
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
                    fullWidth={true}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    fullWidth={true}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    fullWidth={true}
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
    </>
  );
};

export default Contact;

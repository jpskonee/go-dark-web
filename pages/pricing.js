import { Grid } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import "plyr-react/dist/plyr.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";


const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Pricing = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

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
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <div className="priceMain">
            <Grid container className="priceInner">
              <Grid item className="priceTextDiv">
                <div className="priceText" text={["Pricing", "Go Dark"]}>
                  {" "}
                  Pricing{" "}
                </div>
              </Grid>
            </Grid>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="tableMain pricingTable">
              <Grid container className="tableInner pricingTable-firstTable">
                <Grid
                  style={{ marginBottom: "3rem" }}
                  item
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">
                      Privacy Risk Report
                    </h1>
                    <p className="pricingTable-firstTable_table__pricing">
                      <span>$</span>
                      <span>100</span>
                      <span></span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                      <li>
                        Get a comprehensive report on where your personal
                        information exists on the internet.
                      </li>
                    </ul>
                    <p style={{ marginTop: "1rem" }}>
                      Report provided within 30 minutes.{" "}
                    </p>
                    <button className="pricingTable-firstTable_table__getstart">
                      <Link href="/contact"> Contact Us</Link>
                    </button>
                  </li>
                </Grid>

                <Grid
                  style={{ marginBottom: "3rem" }}
                  item
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">
                      Personal Protection Report
                    </h1>
                    <p className="pricingTable-firstTable_table__pricing">
                      <span>$</span>
                      <span>500</span>
                      <span></span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                      <li>
                        Get a comprehensive report on where your personal
                        information exists on the internet, as well as those
                        connected to you. This task is assigned to a hacker who
                        leads your case. This is a thorough investigation and
                        will uncover things that might surprise / scare you.
                        Note, we never do anything nefarious
                      </li>
                    </ul>
                    <button className="pricingTable-firstTable_table__getstart">
                      <Link href="/contact"> Contact Us</Link>
                    </button>
                  </li>
                </Grid>

                <Grid
                  style={{ marginBottom: "3rem" }}
                  item
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">
                      Internet Anonymity and Data Remediation
                    </h1>
                    <p className="pricingTable-firstTable_table__pricing">
                      <span>$</span>
                      <span>1000</span>
                      <span></span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                      <li>
                        In order to understand what it takes to disappear, you
                        have to have a solid plan to remove yourself from the
                        internet. We could find things that could surprise or
                        scare you. Our investigations are thorough and take
                        time, but this is a necessary step. We’ll put together a
                        comprehensive report on exactly to remove yourself from
                        the internet.
                      </li>
                    </ul>
                    <p style={{ marginTop: "1rem" }}>
                      Note, we dont accept just anyone. For liability sake, we
                      need to interview each person seeking to remove themselves
                      from the internet
                    </p>
                    <button className="pricingTable-firstTable_table__getstart">
                      <Link href="/contact"> Contact Us</Link>
                    </button>
                  </li>
                </Grid>
              </Grid>
            </div>
          </div>
        </Parallax>
      </div>
  );
};

export default Pricing;

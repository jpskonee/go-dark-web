import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { motion } from "framer-motion";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  const [hover, setHover] = useState(false);

  const onMouseOver = (e) => {
    setTimeout(() => {
      setHover(true);
    }, 500);
  };

  const onMouseLeave = (e) => {
    setHover(false);
    // document.getElementById("earth-text-id").style.display = "none";
  };

  return (
    <div className="footerDiv">
      <Grid container className="footerinner">
        <Grid className="earth-div" item md={12}>
          <div
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            className="earth-img"
          >
            <Link href="/contact">
              <a>
                <Image src="/globeRed.gif" width={350} height={350} alt="" />
              </a>
            </Link>
          </div>
          {hover && (
            <motion.div
              // id="earth-text-id"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: -10, opacity: 1 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="earth-text"
            >
              <PinDropIcon
                style={{
                  color: "white",
                  fontSize: "4rem",
                  marginRight: "2rem",
                }}
              />
              Portland <br /> Oregon
            </motion.div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

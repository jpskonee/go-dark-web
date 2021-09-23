import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { motion } from "framer-motion";

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
          <div className="earth-img">
            <Link
              href="/contact"
            >
              <a>
              <Image
                src="/blue-earth.gif"
                width={400}
                height={400}
           
                alt=""
              />
              </a>
            </Link>
          </div>
          {hover && (
            <motion.div
              // id="earth-text-id"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: -50, opacity: 1 }}
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
        <Grid className="logoMenuDiv" item md={12} container>
          <Grid item md={4}>
            <Link href="/">
              <a>
                <Image
                  src="/skull.gif"
                  alt="GoDark Icon"
                  width={120}
                  height={120}
                />
              </a>
            </Link>
          </Grid>
          <Grid item md={8} className="menubar">
            <div className="menu-item">
              <Link href="/">
                <a> Home </a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>

            <div className="menu-item">
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
            <div className="contactDiv">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

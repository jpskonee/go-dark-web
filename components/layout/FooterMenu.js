import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { motion } from "framer-motion";

function FooterMenu() {
  return (
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
  );
}

export default FooterMenu;

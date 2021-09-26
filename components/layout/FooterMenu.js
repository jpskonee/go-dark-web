import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { motion } from "framer-motion";

function FooterMenu() {
  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Neototem.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Grid className="logoMenuDiv" item md={12} container>
        <Grid style={{ lineHeight: "1.1rem" }} item md={6} className="menubar">
          © Copyright <br /> Go-Dark {year}
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterMenu;

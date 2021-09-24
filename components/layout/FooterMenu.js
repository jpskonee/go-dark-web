import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { motion } from "framer-motion";

function FooterMenu() {
  const year = new Date().getFullYear();

  console.log(year);

  return (
    <Grid className="logoMenuDiv" item md={12} container>
      <Grid item md={4} className="menubar">
        © Copyright Go-Dark {year}
      </Grid>
    </Grid>
  );
}

export default FooterMenu;

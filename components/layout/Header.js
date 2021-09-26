import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useSpring, config, animated } from "react-spring";

import Plyr from "plyr-react";
import ReactAudioPlayer from "react-audio-player";
import audio from "../../utils/Audio";

const Header = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setTimeout(() => {
      setDropDown(!dropDown);
    }, 1000);
  };

  function toggleBodyclassName(className) {
    document.body.classList.toggle(className);
  }

  const [flip, set] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <div>
      <div className="headerAll">
        {" "}
        <Grid container className="header">
          <Grid item md={3}></Grid>
          <Grid item md={6} className="menubar">
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

            <div className="logo">
              {isHovered ? (
                <Link href="/">
                  <a>
                    <Image
                      className="header_loading__skull"
                      src="/skull.gif"
                      alt="GoDark Icon"
                      width={90}
                      height={90}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a>
                    <Image
                      className="header_loading__skull"
                      src="/skull.png"
                      alt="GoDark Icon"
                      width={90}
                      height={90}
                      onMouseEnter={() => setIsHovered(true)}
                    />
                  </a>
                </Link>
              )}
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
          </Grid>
          {/* <Grid item md={2}></Grid> */}
          <Grid item lg={2} md={1}></Grid>
          <Grid item lg={1} md={2}>
            <Link href="/contact">
              <a className="contactDiv">Contact</a>
            </Link>
          </Grid>
        </Grid>{" "}
      </div>
      <div className="headerMobi">
        <div className="logo">
          <Link href="/">
            <a>
              <Image
                className="header_loading__skull"
                src="/skull.gif"
                alt="GoDark Icon"
                width={90}
                height={90}
                onMouseLeave={() => setIsHovered(false)}
              />
            </a>
          </Link>
        </div>
        <div>
          <IconButton
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            <MenuIcon
              style={{
                color: "white",
                fontSize: "2.5rem",
                marginRight: "1rem",
              }}
            />
          </IconButton>
        </div>
      </div>
      {dropDown && (
        <animated.div
          initial={{ y: 500 }}
          animate={{ y: -300 }}
          transition={{ duration: 3, delay: 2 }}
          className="dropDown"
        >
          <div onClick={toggleDropDown} className="menu-item">
            <Link href="/">
              <a> Home </a>
            </Link>
          </div>
          <div onClick={toggleDropDown} className="menu-item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div onClick={toggleDropDown} className="menu-item">
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </div>
          <div onClick={toggleDropDown} className="menu-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div onClick={toggleDropDown}>
            <Link href="/contact">
              <a
                style={{
                  background: "red",
                  padding: ".7rem 1rem",
                  borderRadius: "0.5rem",
                }}
              >
                Contact
              </a>
            </Link>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Header;

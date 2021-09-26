import PropTypes from "prop-types";
import Image from "next/image";
import CountUp from "react-countup";
import Head from "next/head";

const Loading = ({ onEnd }) => {
  return (
    <div className="loading">
      <Head>
        <link
          rel="preload"
          href="/fonts/Neototem.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Image
        className="loading__skull"
        src="/skull.gif"
        alt="GoDark Icon"
        width={148}
        height={148}
      />
      <div className="loading__footer">
        <div className="loading__footer-line" />
        <span className="loading__footer-percent">
          <CountUp
            end={100}
            duration={5}
            decimals={5}
            useEasing={false}
            onEnd={onEnd}
          />
        </span>
      </div>
    </div>
  );
};

Loading.propTypes = {
  onEnd: PropTypes.func,
};

export default Loading;

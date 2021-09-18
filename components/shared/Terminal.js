import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";

const Terminal = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello there!",
        "My name is Centurion :)",
        "I find things about people on the internet.",
        'Click <a className="terminal__link" href="/about"> here</a> to find out more!',
      ],
      startDelay: 500,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__button _green" />
        <div className="terminal__button _yellow" />
        <div className="terminal__button _red" />
      </div>
      <div className="terminal__body">
        $&nbsp;
        <span ref={el} />
        {/*<span className="terminal__cursor" />*/}
      </div>
    </div>
  );
};

export default Terminal;

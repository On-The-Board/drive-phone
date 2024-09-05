"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card_testimonials(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className="w-56 rounded-md bg-white text-black p-2"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="flex flex-row w-full">
        <Image alt="" src={props.img} width={50} height={50} className="rounded-full p-2"/>
        <h2 className="self-center text-center ">{props.name}</h2>
      </div>
      <p className="text-sm p-2">
        {props.text}
      </p>
    </animated.div>
  );
}

export default Card_testimonials;

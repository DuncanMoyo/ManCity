import React from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

const stripeData = {
  stripes: [
    {
      background: "#98c5e9",
      left: 120,
      rotate: 25,
      top: -260,
      delay: 100,
    },
    {
      background: "#ffffff",
      left: 360,
      rotate: 25,
      top: -397,
      delay: 300,
    },
    {
      background: "#98c5e9",
      left: 600,
      rotate: 25,
      top: -498,
      delay: 500,
    },
  ],
};

const showStripes = () => {
  const { stripes } = stripeData;
  return (
    <div className="featured_stripes">
      {stripes.map(({ background, top, left, delay, rotate }) => (
        <Animate
          key={left}
          show
          start={{
            background,
            opacity: 0,
            left: 0,
            rotate: 0,
            top: 0,
          }}
          enter={{
            background: [background],
            opacity: [1],
            rotate: [rotate],
            top: [top],
            left: [left],
            timing: { delay: delay, duration: 200, ease: easePolyOut },
            events: {
              end() {
                console.log("Animation finished");
              },
            },
          }}
        >
          {({ background, left, rotate, top, opacity }) => {
            return (
              <div
                className="stripe"
                style={{
                  background: `${background}`,
                  opacity: `${opacity}`,
                  transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`,
                }}
              ></div>
            );
          }}
        </Animate>
      ))}
    </div>
  );
};

export default showStripes;

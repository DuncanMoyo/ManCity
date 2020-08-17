import React from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Assets/images/players/Otamendi.png";
import PlayerCard from "../../UI/PlayerCard";

const CardData = {
  cards: [
    { bottom: 90, left: 300 },
    { bottom: 60, left: 200 },
    { bottom: 30, left: 100 },
    { bottom: 0, left: 0 },
  ],
};

const showAnimateCards = (props) => {
  const { cards } = CardData;
  return (
    <div>
      {cards.map(({bottom, left}) => (
        <Animate
          key={bottom}
          show={props.show}
          start={{ left: 0, bottom: 0 }}
          enter={{
            left: [left],
            bottom: [bottom],
            timing: { duration: 500, ease: easePolyOut },
          }}
        >
          {({ left, bottom }) => {
            return (
              <div style={{ position: "absolute", left, bottom }}>
                <PlayerCard
                  number="30"
                  name="Nicolas"
                  lastName="Otamendi"
                  bck={Otamendi}
                />
              </div>
            );
          }}
        </Animate>
      ))}
    </div>
  );
};

export default showAnimateCards;

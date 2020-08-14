import React, { useState } from "react";
import Stripes from "../../../Assets/images/stripes.png";
import Tag from "../../UI/Misc";
import Reveal from "react-reveal/Reveal";
import Cards from "./Cards";


  const MeetPlayers = () => {

    const [show, setShow] = useState(false)

    const displayWords = ['Meet', 'The', 'Players']

    return (
      <Reveal
        fraction={0.9}
        onReveal={() => {
          setShow(true)
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={show} />
              </div>
              <div className="home_text_wrapper">
                {displayWords.map((word, i) => {
                  return (
                    <div key={i} >
                    <Tag
                      bck="#0e1731"
                      size="100px"
                      color="#ffffff"
                      add={{
                        display: "inline-block",
                        marginBottom: "20px",
                      }}
                    >
                      {word}
                    </Tag>
                  </div>
                  )
                })}
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkTo="/the_team"
                    add={{
                      display: "inline-block",
                      marginBottom: "27px",
                      border: "1px solid #0e1731",
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

export default MeetPlayers;

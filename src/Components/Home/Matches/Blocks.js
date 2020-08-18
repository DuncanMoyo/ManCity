// import React, { useState, useEffect } from "react";
// import { firebaseMatches } from "../../../firebase";
// import { firebaseLooper, reverseArray } from "../../UI/Misc";
// import MatchesBlock from "../../UI/Matches_block";
// import Slide from "react-reveal/Slide";

// const Blocks = () => {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     firebaseMatches
//       .limitToLast(6)
//       .once("value")
//       .then((snapshot) => {
//         // console.log(snapshot.val());
//         const matches = firebaseLooper(snapshot);
//         // console.log(matches);
        
//         setMatches({ matches: reverseArray(matches) });
//       });
//   }, []);

//   const showMatches = (matches) => {
//     return (
//       matches ? matches.map((match) => (
//         <Slide bottom key={match.id}>
//           <div className="item">
//             <div className="wrapper">
//               <MatchesBlock match={match} />
//             </div>
//           </div>
//         </Slide>
//       ))
//     : null   
//     )
//   }
   

//   // console.log(this.state);
//   return (
//     <div className="home_matches">{showMatches(matches)}</div>
//   );
// };

// export default Blocks;















import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase'
import {firebaseLooper, reverseArray} from '../../UI/Misc'
import MatchesBlock from '../../UI/Matches_block';
import Slide from 'react-reveal/Slide'


class Blocks extends Component {

  state = {
    matches: []
  }

  componentDidMount () {
    firebaseMatches.limitToLast(6).once('value').then(snapshot => {
      // console.log(snapshot.val());
      const matches = firebaseLooper(snapshot)
      // console.log(matches);
      this.setState({matches: reverseArray(matches)})
    })
  }

  showMatches = matches => (
    matches ? matches.map(match => (
      <Slide bottom key={match.id}>
         <div className='item'>
        <div className='wrapper'>
          <MatchesBlock match={match} />
        </div>
      </div>
      </Slide>
     
    ))
    : null
  )

  render() {
    console.log(this.state);
    return (
      <div className='home_matches'>
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}

export default Blocks

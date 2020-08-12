import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase'
import {firebaseLooper, reverseArray} from '../../UI/Misc'
import MatchesBlock from '../../UI/Matches_block';
import Slide from 'react-reveal/Slide'


export class Blocks extends Component {

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
      <div className='homes_matches'>
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}

export default Blocks
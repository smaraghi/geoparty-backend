import React from 'react'
import { Segment, Header, Image } from 'semantic-ui-react'

const About = () => {
  return(
    <div id='about-container'>
      <Segment id='about-blurb'>
				<p>GeoParty is a lightweight learning tool for users of all ages! Discover new and interesting facts about countries spanning the globe. Challenge yourself with an assortment of trivia questions and keep track of your progress. Compete with friends to answer the most correct questions and earn the greatest number of stars!</p>
			</Segment>
      <div id='about-map-container'>
        <Image id='about-map'  src={require('../images/world-map.jpg')} alt='world map' />
      </div>
    </div>
	)
}

export default About 
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
  
const about = {
    width:650, 
    position:'relative', 
    fontFamily:'sans-serif',
    color:'#222',
    textAlign:'justify', 
    zIndex:'10'
}

class About extends Component {
    render() {
        return (
            <Container>
                <div className='About' style={about}>
                <h2>Hi, nice to meet you!</h2>
                <br></br>
                <h4 style={{lineHeight:'150%'}}>
                    And thanks for checking out my site. I'm Julie Ragsdale, 
                    an artist and maker located in Durham, NC. My small handmade 
                    cement planters have proven to be the cornerstone of my 
                    business, but I create a variety of plant-related 
                    goods, from macrame plant hangers to watercolor paintings! 
                    Everything that I sell is either designed or completely 
                    handmade by me. Guess what? Even my website was made by 
                    me. Yep, you guessed it — I'm a web developer, too! Click 
                    Shop to browse my goods, Gallery to view some of my work, 
                    or Contact to reach out to me about custom orders or to 
                    discuss your new website!
                </h4>
                </div>
            </Container>
        )
    }
}

export default About;
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import one from '../photo_2019-05-30_15-30-57.jpg';
import two from '../monsteraprint.jpg';
import three from '../photo_2019-05-30_15-31-02.jpg';
import four from '../photo_2019-05-30_15-31-04.jpg';
import five from '../photo_2019-05-30_15-31-06.jpg';
import six from '../photo_2019-05-30_15-31-07.jpg';
import seven from '../photo_2019-05-30_15-31-09.jpg';
import eight from '../photo_2019-05-30_15-31-11.jpg';
import nine from '../photo_2019-05-30_15-31-19.jpg';
import ten from '../photo_2019-05-30_15-31-12.jpg';
import eleven from '../photo_2019-05-30_15-31-15.jpg';
import twelve from '../photo_2019-05-30_15-31-23.jpg';
import thirteen from '../photo_2019-05-30_15-31-25.jpg';


class Gallery extends Component {
    render() {
        return (
            <Container style={{position:'relative', top:370, marginBottom:110, zIndex:'-5'}}>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={two} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={one} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={three} />
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={five} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={eight} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={seven} />
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={nine} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={four} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={six} />
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={eleven} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={twelve} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={thirteen} />
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}

export default Gallery;
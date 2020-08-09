import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class MyComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <p>Side Menu???</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <div className="main-content">
                            <p>Some content should be here and maybe a prop, {this.props.name}.</p>
                            <p>Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in 
                                litter box until treats are fed meow all night having their mate disturbing 
                                sleeping humans so catto munch salmono. Eat the fat cats food stare at ceiling 
                                light, poop in a handbag look delicious and drink the soapy mopping up water 
                                then puke giant foamy fur-balls and immediately regret falling into bathtub 
                                that box? i can fit in that box bring your owner a dead bird. Kitty ipsum dolor 
                                sit amet, shed everywhere shed everywhere stretching attack your ankles chase 
                                the red dot, hairball run catnip eat the grass sniff plan your travel for please 
                                let me outside pouty face yay! wait, it's cold out please let me inside pouty face 
                                oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside 
                                again the neighbor cat was mean to me please let me back inside proudly present butt 
                                to human, catasstrophe. Loves cheeseburgers. Instead of drinking water from the cat 
                                bowl, make sure to steal water from the toilet give attitude, for push your water 
                                glass on the floor, and cat ass trophy headbutt owner's knee.
                            </p>
                            <img src="http://placekitten.com/300/300" alt="kitten"></img>
                            <p>Jumps off balcony gives owner dead mouse at present then poops in litter box snatches 
                                yarn and fights with dog cat chases laser then plays in grass finds tiny spot in 
                                cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish 
                                the cat knocks over the food dish cat slides down the water slide and into pool and 
                                swims even though it does not like water hey! you there, with the hands purr while 
                                eating attack dog, run away and pretend to be victim. Catasstrophe hunt anything that 
                                moves catching very fast laser pointer meow all night i like frogs and 0 gravity pelt 
                                around the house and up and down stairs chasing phantoms for friends are not food. Purr 
                                while eating then cats take over the world ask to be pet then attack owners hand lick 
                                human with sandpaper tongue eat owner's food scratch at the door then walk away yet 
                                meoooow. Loves cheeseburgers chew the plant i will ruin the couch with my claws. Chase 
                                after silly colored fish toys around the house licks paws so look at dog hiiiiiisssss 
                                for licks paws and meowing chowing and wowing, but if human is on laptop sit on the keyboard.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export { MyComponent }
import {FC} from 'react';
import {Container, Button} from 'react-bootstrap';
import {HomeContainer, HomeHeading, HomeParagraph, HomeButton} from './Styles';

const HomeSection: FC<any> = () => {
    return (
        <HomeContainer>
            <HomeHeading>Product Photography for your online business</HomeHeading>
            <HomeParagraph>Ship your products today to get high-quality photos in days, not weeks.</HomeParagraph>
            <HomeButton>
                <div style ={{ fontWeight: 600}}>
                Book a product photoshoot
                </div>
            </HomeButton>
        </HomeContainer>
    )
}

export default HomeSection;
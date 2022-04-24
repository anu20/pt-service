import React, {FC} from 'react';

import {
    Section, Container, Grid, ImageContainer, DetailImage, 
    DescriptionContainer, Description, Title
} from './Styles';

const DetailSection:FC = () =>{
    return (
        <Section>
            <Container>
                <Grid>
                    <ImageContainer>
                        <DetailImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5dcb2e9fcbf49293ba5bf099_noahny_0014_16.png" alt="shirt clothing product photos" id="w-node-cb44c6e3-2454-0107-9685-887c2d52f6a8-9166efd9"/>
                        <DetailImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5ddba6789f4e49f7324f8d96_Order_429402%2012.jpg" alt="clothing product photography pricing"/>
                        <DetailImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5ddba67442baa9d6d96aae6a_Order_430101__0015_16.png" alt="flat lay clothing product photography" id="w-node-cb44c6e3-2454-0107-9685-887c2d52f6aa-9166efd9" />
                        <DetailImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5dd301b43354cd99e62a19ff_Order_303104%209.png" alt="clothing photography for ecommerce" />
                    </ImageContainer>
                    <DescriptionContainer>
                        <Title>
                            <strong>{"A keen eye to every detail"}</strong>
                        </Title>
                        <Description>
                            {"Help your customers see more in your items. Show close-ups of the small nuances: stitches, buttons, fabrics texture. Use your clothing photography images to show how you care about details."}
                        </Description>
                    </DescriptionContainer>
                </Grid>
            </Container>
        </Section>
    )
};

export default DetailSection
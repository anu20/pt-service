import React, {FC} from 'react';

import {Section,Container, Banner, Grid, ImageContainer, CategoryImage, HeaderContainer, CategoryHeader, 
    DescriptionContainer, Description, ListRight, ListLeft, BookButton, DetailPointer, TickContainer, Detail} from './Styles';

const BannerSection:FC = () =>{
    return (
        <Section>
            <Container>
                <Banner></Banner>
                <Grid>
                    <ImageContainer>
                        <CategoryImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5ddba7b9fb62492bf3202ccb_93%20(2)%20(2).png" alt="clothing product photography services">
                        </CategoryImage>
                    </ImageContainer>
                    <HeaderContainer>
                        <CategoryHeader>
                            {"Getting clothing shots has never been easier"}
                        </CategoryHeader>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <Description>
                            <ListRight>
                                <DetailPointer>
                                    <TickContainer>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                    </TickContainer>
                                    <Detail>{"Retouching included"}</Detail>
                                </DetailPointer>
                                <DetailPointer>
                                    <TickContainer>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                    </TickContainer>
                                    <Detail>{"Revisions accepted"}</Detail>
                                </DetailPointer>
                            </ListRight>
                            <ListLeft>
                                <DetailPointer>
                                    <TickContainer>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                    </TickContainer>
                                    <Detail>{"Unlimited usage license"}</Detail>
                                </DetailPointer>
                                <DetailPointer>
                                    <TickContainer>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                    </TickContainer>
                                    <Detail>{"Test shot before start"}</Detail>
                                </DetailPointer>
                            </ListLeft>
                        </Description>
                        <BookButton>Get Started</BookButton>
                    </DescriptionContainer>
                </Grid>
            </Container>
        </Section>
    )
};

export default BannerSection
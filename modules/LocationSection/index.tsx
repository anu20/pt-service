import {FC} from 'react';

import {
    LocationSectionDiv, LocationContainer, LocationHeader, LocationCardSection, 
    LocationCard, LocationImageSection, LocationCardImage, LocationImageShade, 
    LocationImageLink, LocationUnderline, LocationCitySection, LocationCityHeader,
    LocationCardBadge, BadgeText, TickSection, LocationDetailSection, LocationLink,
    LocationLinkText, LocationLinkImage
} from './Styles';

const LocationSection: FC<any> = () => {
    return (
        <LocationSectionDiv>
            <LocationContainer>
                <LocationHeader>
                    {"Our locations"}
                </LocationHeader>
                <LocationCardSection>

                    <LocationCard>
                        <LocationImageSection>
                            <LocationCardImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/61702ef3841c036afc976d9f_4-min.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1279px) 44vw, 540px" srcset="https://global-uploads.webflow.com/5d552994548be47b97db38c2/61702ef3841c036afc976d9f_4-min-p-500.jpeg 500w, https://global-uploads.webflow.com/5d552994548be47b97db38c2/61702ef3841c036afc976d9f_4-min-p-800.jpeg 800w, https://global-uploads.webflow.com/5d552994548be47b97db38c2/61702ef3841c036afc976d9f_4-min-p-1080.jpeg 1080w, https://global-uploads.webflow.com/5d552994548be47b97db38c2/61702ef3841c036afc976d9f_4-min.jpg 1472w" alt="" />
                            <LocationImageShade>
                                <LocationImageLink href="https://goo.gl/maps/AJBRSqZpcu9DJAdA8" target="_blank">
                                    <div>{"Get directions"}</div>
                                </LocationImageLink>
                            </LocationImageShade>
                        </LocationImageSection>
                        <LocationCitySection>
                            <LocationCityHeader>{"New Delhi, Delhi"}</LocationCityHeader>
                            <LocationCardBadge>
                                <BadgeText>{"Open"}</BadgeText>
                                <TickSection>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                </TickSection>
                            </LocationCardBadge>
                            <LocationCardBadge>
                                <BadgeText>{"Accept Drop Offs"}</BadgeText>
                                <TickSection>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                </TickSection>
                            </LocationCardBadge>
                        </LocationCitySection>
                        <LocationDetailSection>
                            <a href="https://goo.gl/maps/AJBRSqZpcu9DJAdA8" target="_blank" style={{color: "#444"}}>
                                {"13 Grattan St Ste 202, Brooklyn, NY 11206"}
                                <br/>
                                ‍
                            </a>
                            {"Mon - Fri: 10am - 5pm IST"}
                            <br/>
                            <a href={"_target"} style={{color: "#444"}}>855-577-1375</a>
                        </LocationDetailSection>
                        <LocationLink href={"https://app.heroshot.io/f/xwaBkVpOjL"}>
                            <LocationLinkText>{"Place order"}</LocationLinkText>
                            <LocationLinkImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f818d17374a417ae5db6707_arrow.svg" loading="lazy"></LocationLinkImage>
                        </LocationLink>
                    </LocationCard>

                    <LocationCard>
                        <LocationImageSection>
                            <LocationCardImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/605775002900a5263f9ab349_Photo%20Feb%2025%2C%2008%2057%2044%20copy%201.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 45vw, (max-width: 1279px) 44vw, 540px" srcset="https://global-uploads.webflow.com/5d552994548be47b97db38c2/605775002900a5263f9ab349_Photo%20Feb%2025%2C%2008%2057%2044%20copy%201-p-500.png 500w, https://global-uploads.webflow.com/5d552994548be47b97db38c2/605775002900a5263f9ab349_Photo%20Feb%2025%2C%2008%2057%2044%20copy%201-p-800.png 800w, https://global-uploads.webflow.com/5d552994548be47b97db38c2/605775002900a5263f9ab349_Photo%20Feb%2025%2C%2008%2057%2044%20copy%201.png 1080w" alt=""/>
                            <LocationImageShade>
                                <LocationImageLink href="https://goo.gl/maps/AJBRSqZpcu9DJAdA8" target="_blank">
                                    <div>{"Get directions"}</div>
                                </LocationImageLink>
                            </LocationImageShade>
                        </LocationImageSection>
                        <LocationCitySection>
                            <LocationCityHeader>{"Mumbai, MH"}</LocationCityHeader>
                            <LocationCardBadge>
                                <BadgeText>{"Open"}</BadgeText>
                                <TickSection>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                </TickSection>
                            </LocationCardBadge>
                            <LocationCardBadge>
                                <BadgeText>{"Accept Drop Offs"}</BadgeText>
                                <TickSection>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.998-26.205-9.997-36.204 0s-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 10 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path></svg>
                                </TickSection>
                            </LocationCardBadge>
                        </LocationCitySection>
                        <LocationDetailSection>
                            <a href="https://goo.gl/maps/9Jf1XuKjkCB2uaU9A" target="_blank" style={{color: "#444"}}>726 S Santa Fe Ave, Unit 200, Los Angeles, CA 90021</a>
                            <br/>
                            {"Mon - Fri: 10am - 5pm IST"}
                            <br/>
                            <a href={"_target"} style={{color: "#444"}}>855-577-1375</a>
                        </LocationDetailSection>
                        <LocationLink href={"https://app.heroshot.io/f/xwaBkVpOjL"}>
                            <LocationLinkText>{"Place order"}</LocationLinkText>
                            <LocationLinkImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f818d17374a417ae5db6707_arrow.svg" loading="lazy"></LocationLinkImage>
                        </LocationLink>
                    </LocationCard>

                </LocationCardSection>
                <LocationUnderline></LocationUnderline>
            </LocationContainer>
        </LocationSectionDiv>
    )
};

export default LocationSection;
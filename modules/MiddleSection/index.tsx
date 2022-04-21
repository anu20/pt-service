import {FC} from 'react';
import {MiddleSectionDiv, MiddleContainer, MiddleParagraph, 
    MiddleLogoContainer, MiddleLogo, MiddleLogoImage, MiddleUnderline} from './Styles';

const MiddleSection: FC<any> = () => {
    return (
        <MiddleSectionDiv>
            <MiddleContainer>
                <MiddleParagraph>
                    {"eCommerce photography service trusted"}
                    <br/>
                    {"by over 1,000 brands and counting..."}
                </MiddleParagraph>
                <MiddleLogoContainer>
                    <MiddleLogo>
                        <MiddleLogoImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f8725c260c9ff5e7fb472bd_Greats%205%EF%BF%BD.png" loading="lazy" alt=""/>
                    </MiddleLogo>
                    <MiddleLogo>
                        <MiddleLogoImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f8725e19aa4fcc4ae56b2db_%202.png" loading="lazy" alt=""></MiddleLogoImage>
                    </MiddleLogo>
                    <MiddleLogo>
                        <MiddleLogoImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f8725edebbdc55fbe488051_%2029.png" loading="lazy" alt=""></MiddleLogoImage>
                    </MiddleLogo>
                    <MiddleLogo>
                        <MiddleLogoImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f87260b4e631d0380d3dfbc_Knickerbocker%202%2C5%EF%BF%BD.png" loading="lazy" alt=""></MiddleLogoImage>
                    </MiddleLogo>
                    <MiddleLogo>
                        <MiddleLogoImage src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f87261c1fcffe807d203924_%207.png" loading="lazy" alt=""></MiddleLogoImage>
                    </MiddleLogo>
                    <MiddleLogo>
                        <MiddleLogoImage style={{ width: "120px"}} src="https://global-uploads.webflow.com/5d552994548be47b97db38c2/5f872626d07ffb793c6d0ae9_%209.png" loading="lazy" alt=""></MiddleLogoImage>    
                    </MiddleLogo>
                </MiddleLogoContainer>
                <MiddleUnderline></MiddleUnderline>
            </MiddleContainer>
        </MiddleSectionDiv>
    )
};

export default MiddleSection;
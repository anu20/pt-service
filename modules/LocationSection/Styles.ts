import styled from "@emotion/styled";

export const LocationSectionDiv = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    margin-top: 64px;
    margin-bottom: 64px;
`;

export const LocationContainer = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    display: flex;
    width: 90%;
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`;

export const LocationHeader = styled.h2`
    text-align: left;
    box-sizing: border-box;
    margin-top: 0;
    font-family: Inter,sans-serif;
    max-width: 730px;
    color: #111;
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 40px;
`;

export const LocationCardSection = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 64px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

export const LocationCard = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    text-align: left;
`;

export const LocationImageSection = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    position: relative;
`

export const LocationCardImage = styled.img`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    max-width: 100%;
    border-radius: 16px;
`;

export const LocationImageShade = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: rgba(0,0,0,.4);
    opacity: 0;
    transition: opacity .2s;
`;

export const LocationImageLink = styled.a`
    line-height: 20px;
    text-align: left;
    box-sizing: border-box;
    background-color: transparent;
    max-width: 100%;
    display: flex;
    width: 106px;
    height: 32px;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 6px;
    font-family: Inter,sans-serif;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
`;

export const LocationUnderline = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
    margin-top: 64px;
`;

export const LocationCitySection = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    margin-top: 24px;
`;

export const LocationCityHeader = styled.h3`
    text-align: left;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;
    color: #111;
    font-weight: 700;
    font-family: Inter,sans-serif;
    font-size: 24px;
    line-height: 32px;
`;

export const LocationCardBadge = styled.div`
    line-height: 20px;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    margin-left: 16px;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: #f5f5f5;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 12px;
    font-weight: 600;
`;

export const BadgeText = styled.div`
    line-height: 20px;
    text-align: left;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    margin-right: 7px;
`;

export const TickSection = styled.div`
    line-height: 20px;
    text-align: left;
    font-family: Inter,sans-serif;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    margin-right: 0;
    color: #73d13d;
`;

export const LocationDetailSection = styled.p`
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 0;
    font-size: 16px;
    font-family: Inter,sans-serif;
    line-height: 24px;
    color: #444;
    font-weight: 400;
    margin-top: 16px;
`;

export const LocationLink = styled.a`
    text-align: left;
    box-sizing: border-box;
    max-width: 100%;
    display: flex;
    height: 48px;
    padding: 0;
    justify-content: center;
    align-items: center;
    border: 2px solid #111;
    border-radius: 8px;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 32px;
    background-color: #fff;
    width: 148px;
`;

export const LocationLinkText = styled.div`
    text-align: left;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: 600;
`;

export const LocationLinkImage = styled.img`
    text-align: left;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    box-sizing: border-box;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    width: 16px;
    height: 24px;
    margin-left: 4px;
`;
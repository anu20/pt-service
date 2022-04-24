import styled from "@emotion/styled";

export const Section = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    padding-top: 72px;
    padding-bottom: 72px;
    background-color: #ffefe1 !important;
`;

export const Container = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    display: flex;
    width: 90%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Banner = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: none;
`;

export const Grid = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 20px;
    grid-template-columns: minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px) minmax(auto,65px);
    grid-template-rows: auto;
`;

export const ImageContainer = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    grid-column-start: span 6;
    grid-column-end: span 6;
    grid-row-start: span 4;
    grid-row-end: span 4;
    align-self: center;
`;

export const CategoryImage = styled.img`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    width: 100%;
`;

export const HeaderContainer = styled.h1`
    box-sizing: border-box;
    margin: .67em 0;
    margin-top: 0;
    font-family: Montserrat,sans-serif;
    color: #111;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.2em;
    margin-bottom: 20px;
    font-size: 40px;
    grid-column-start: 8;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 3;
    align-self: end;
`;

export const CategoryHeader = styled.strong`
    font-family: Montserrat,sans-serif;
    color: #111;
    letter-spacing: -1px;
    line-height: 1.2em;
    font-size: 40px;
    box-sizing: border-box;
    font-weight: 700;
`;

export const DescriptionContainer = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    align-self: start;
    grid-column-start: 8;
    grid-column-end: 13;
    grid-row-start: 3;
    grid-row-end: 5;
`;


export const Description = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 20px;
`;

export const ListRight = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    align-self: flex-end;
    margin-right: 24px;
`;

export const ListLeft = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin-right: 20px;
    align-self: flex-end;
`;


export const BookButton = styled.a`
    font-size: 14px;
    font-family: 'Open Sans',sans-serif;
    box-sizing: border-box;
    display: inline-block;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: #111;
    font-weight: 600;
    text-align: center;
    height: 48px;
    margin-left: 0;
    padding: 0;
    color: #fff;
    line-height: 48px;
    width: 235px;
`;

export const DetailPointer = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

export const TickContainer = styled.div`
    font-size: 14px;
    line-height: 20px;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    margin-bottom: 3px;
    color: #7a7a7a;
`

export const Detail = styled.div`
    font-family: 'Open Sans',sans-serif;
    box-sizing: border-box;
    color: #444;
    font-size: 12px;
    line-height: 2rem;
    font-weight: 400;
`
import styled from "@emotion/styled";

export const Section = styled.div`
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    margin-top: 144px;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
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
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 235px 235px;
    grid-template-rows: 235px 235px;
    grid-column-start: span 6;
    grid-column-end: span 6;
    grid-row-start: span 1;
    grid-row-end: span 1;    
`;

export const DescriptionContainer = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    grid-column-start: 8;
    grid-column-end: 12;
    grid-row-start: 1;
    align-self: center;
`;

export const DetailImage = styled.img`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    max-width: 100%;
    border-radius: 2px;
    background-color: #ffefe1 !important;
`;

export const Title = styled.h2`
    box-sizing: border-box;
    margin-top: 0;
    font-family: Montserrat,sans-serif;
    color: #111;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2em;
    margin-bottom: 10px;
    letter-spacing: -1px;
`;

export const Description = styled.p`
    font-family: 'Open Sans',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.5em;
    color: #444;
`;
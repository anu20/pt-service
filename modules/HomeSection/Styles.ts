import styled from '@emotion/styled';
import exp from 'constants';
import { Button } from 'react-bootstrap';

export const HomeContainer = styled.div`
    display: flex;
    width: 90%;
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const HomeHeading = styled.h1`
    max-width: 575px;
    margin-top: 64px;
    margin-bottom: 0;
    color: #111;
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    letter-spacing: 0;
    font-family: Inter,sans-serif;
`;

export const HomeParagraph = styled.p`
    max-width: 730px;
    margin-top: 16px;
    margin-bottom: 0;
    font-family: Inter,sans-serif;
    color: #aaa;
    line-height: 24px;
    font-weight: 600;
    font-size: 16px;
`

export const HomeButton = styled(Button)`
    margin-top: 32px;
    text-decoration: none;
    display: flex;
    width: 271px;
    height: 48px;
    padding: 0;
    justify-content: center;
    align-items: center;
    border: 2px solid #111;
    border-radius: 8px;
    background-color: #fee6e3;
    font-family: Inter,sans-serif;
    color: #111;
    font-size: 16px;
    line-height: 24px;
`
import styled from "@emotion/styled";
import { jsx, css, keyframes } from '@emotion/react'

export const SliderSection = styled.div`
    overflow: hidden;
    max-width: 100vw;
    margin-top: 56px;
`;

const moving12 = keyframes`
  from{
		transform: translate(0,0);
	}
  to{
  	transform: translate(calc(-12 * 374px), 0)
  }
`

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  animation: 50s linear 0s infinite normal none running ${moving12};
`;

export const SlidePhotoDiv = styled.div`
    -webkit-text-size-adjust: 100%;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    border-radius: 16px;
    margin-right: 12px;
    margin-left: 12px;
    background-color: #f5f5f5;
`

export const ImageBlock =  styled.div`
    -webkit-text-size-adjust: 100%;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: 350px;
    height: 350px;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    border-radius: 16px;
`

export const ProductImage = styled.img`
    border: 0;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    max-width: 100%;
`
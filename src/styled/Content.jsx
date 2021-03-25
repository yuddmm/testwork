import styled from 'styled-components'
import arrowUp from '../images/arrow_up.png'
import arrowDown from '../images/arrow_down.png'

const StContent = styled.main`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 20px;
    background: #FFFFFF;
    box-shadow: 1px 1px 4px #E3E9EC;
`
export const ContentTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #062436;
    margin: 0;
`
export const ContentSubTitle = styled.h4`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #062436;
    margin: 0 0 10px 0;
`
export const Article = styled.details`
    display: flex;
    padding: 20px 0;
    width: 100%;
    /* height: 60px; */
    box-sizing: border-box;
    border-top: solid 2px #F7FAFB;
    &:last-child {
        border-bottom: solid 2px #F7FAFB;
    }
    &[open] summary:after {
        content: url(${arrowUp});
        width: 9px;
        height: 5px;
    }
    &[open] summary ~ * {
    animation: sweep .5s ease-in-out;
    }
    @keyframes sweep {
    0%    {opacity: 0; height: 0%}
    100%  {opacity: 1; height: auto}
    }
`
export const ArticeTitle = styled.summary`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    appearance: none;
    list-style-type: none;
    box-sizing: border-box;
    &:focus {outline: none}
    color: #000000;
    &:after {
        content: url(${arrowDown});
        width: 9px;
        height: 5px;
    }
    
`
export const ArticleContent = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-top: 21px;
    width: 100%!important;
    max-width: calc(100vw - 285px);
    box-sizing: border-box;
`
export const Content = props => <StContent {...props} />
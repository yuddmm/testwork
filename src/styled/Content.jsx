import styled from 'styled-components'

const StContent = styled.main`
    display: flex;
    min-height: 100%;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 20px;
    background: #FFFFFF;
    box-shadow: 1px 1px 4px #E3E9EC;
`
export const ContentTitle = styled.h1`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #062436;
    margin: 0;
`
export const ContentSubTitle = styled.h4`
    font-family: Proxima Nova;
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
    height: 60px;
    box-sizing: border-box;
    border-top: solid 2px #F7FAFB;
`
export const ArticeTitle = styled.summary`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    appearance: none;
    list-style-type: none;
    &:focus {outline: none}
    color: #000000;
`
export const Content = props => <StContent {...props} />
import styled from 'styled-components'

const StFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: 101px;
    box-sizing: border-box;
`
export const FooterText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-align: ${({align}) => align || "left"};
    ${props => props.colored && `
        color: #3DBDF6;    `}
`

export const Footer = props => <StFooter {...props}/> 
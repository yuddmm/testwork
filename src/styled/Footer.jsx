import styled from 'styled-components'

const StFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
`

export const Footer = props => <StFooter {...props}/> 
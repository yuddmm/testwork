import styled from 'styled-components'
import bell from './../images/bells.png'

const StHeader = styled.header`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
`
export const HeaderItem = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #7A8185;
    margin-right: 30px;
    &:last-child {
        margin-right: 0;
    }
`
export const HeaderBell = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-image: url(${bell});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const Header = props => <StHeader {...props}/>
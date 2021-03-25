import styled from 'styled-components'
import logo from './../images/logo.png'
import menu_account from './../images/account.png'
import menu_vps from './../images/vps.png'
import menu_domens from './../images/domens.png'
import menu_bort from './../images/bort.png'

const StSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 265px!important;
    height: inherit;
    box-sizing: border-box;
    background-color: #062436;
`

export const Logotype = styled.a`
    width: 112px;
    height: 22px;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 20px;
`
export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 12px;
`
export const NavigationItem = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 49px;
    box-sizing: border-box;
    padding: 0 20px;
    text-decoration: none;
    &:hover {
       background-color:#0a3145;
    }
    ${props => props.selected && `
        background-color: #15526A;
        border-left: solid 6px #3DBDF6;
        padding: 0 14px;
        &:hover {
            background-color: #15526A;
        }
    `}
`

export const NavigationIcon = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 18px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    ${props => props.account && `background-image: url(${menu_account})`};
    ${props => props.vps && `background-image: url(${menu_vps})`};
    ${props => props.domens && `background-image: url(${menu_domens})`};
    ${props => props.bort && `background-image: url(${menu_bort})`};
`
export const NavigationText = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: white;
    text-decoration: none;
`


export const Sidebar = props => <StSidebar {...props}/>
import { Header, HeaderBell, HeaderItem } from "../styled/Header"

export const HeaderComponent = () => {
    return (
        <Header>
            <HeaderItem>100.00 ₽</HeaderItem>
            <HeaderBell />
            <HeaderItem>username</HeaderItem>
            <HeaderItem>Выйти</HeaderItem>
        </Header>
    )
}
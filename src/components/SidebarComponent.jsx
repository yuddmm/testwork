import { Logotype, Navigation, NavigationIcon, NavigationItem, NavigationText, Sidebar } from "../styled/Sidebar"

export const SidebarComponent = () => {
    return (
        <Sidebar>
            <Logotype href="#"/>
            <Navigation>
                <NavigationItem href="#">
                    <NavigationIcon account/>
                    <NavigationText>АККАУНТ</NavigationText>
                </NavigationItem>
                <NavigationItem href="#">
                    <NavigationIcon vps/>
                    <NavigationText>VPS</NavigationText>
                </NavigationItem>
                <NavigationItem href="#">
                    <NavigationIcon domens/>
                    <NavigationText>ДОМЕНЫ</NavigationText>
                </NavigationItem>
                <NavigationItem href="#" selected>
                    <NavigationIcon bort/>
                    <NavigationText>БОРТОВОЙ ЖУРНАЛ</NavigationText>
                </NavigationItem>
            </Navigation>
        </Sidebar>
    )
}
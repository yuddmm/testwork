import { Flex } from "../styled/Flex"
import { ContentComponent } from "./ContentComponent"
import { HeaderComponent } from "./HeaderComponent"
import { SidebarComponent } from "./SidebarComponent"

export const MainComponent = () => {
    return (
        <Flex width="100%" grow="1">
            <SidebarComponent />
            <Flex direction="column" grow="1" padding="0 20px">
                <HeaderComponent />
                <ContentComponent />
            </Flex>
        </Flex>
    )
}
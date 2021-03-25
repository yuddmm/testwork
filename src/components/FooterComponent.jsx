import { Footer, FooterText } from "../styled/Footer"
import { Flex } from "../styled/Flex"

export const FooterComponent = () => {
    return(
        <Footer>
            <Flex direction="column">
                <FooterText>© 2001– 2018 <FooterText colored>ООО «СпейсВэб»</FooterText></FooterText>
                <FooterText>Все права защищены.</FooterText>
                <FooterText>Лицензия <FooterText colored>№163230</FooterText></FooterText> 
            </Flex>
            <Flex direction="column">
                <FooterText align="right"><FooterText colored>+7 (812) 334-12-22</FooterText> (в Санкт-Петербурге)</FooterText>
                <FooterText align="right"><FooterText colored>+7 (495) 663-16-12</FooterText> (в Москве)</FooterText>
                <FooterText align="right"><FooterText colored>(800) 100-16-15</FooterText>  (бесплатно по России)</FooterText> 
            </Flex>
        </Footer>
    )
}
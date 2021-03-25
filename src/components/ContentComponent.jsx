import { Content, ContentSubTitle, ContentTitle } from "../styled/Content"
import { ArticlesContainer } from "./ArticlesContainer"

export const ContentComponent = () => {
    return (
        <Content>
            <ContentSubTitle>БОРТОВОЙ ЖУРНАЛ</ContentSubTitle>
            <ContentTitle>БОРТОВОЙ ЖУРНАЛ</ContentTitle>
            <ArticlesContainer />
        </Content>
    )
}
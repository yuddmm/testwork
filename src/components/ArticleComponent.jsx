import { ArticeTitle, Article, ArticleContent } from "../styled/Content"

export const ArticleComponent = ({articleData}) => {
    const cdata = articleData["turbo:content"]["_cdata"]

    return (
        <Article>
                <ArticeTitle>{articleData["title"]["_text"]}</ArticeTitle>
                <ArticleContent dangerouslySetInnerHTML={{__html: cdata}} />
        </Article>
    )
}
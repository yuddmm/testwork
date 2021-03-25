import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchArticles } from "../redux/actions";
import { ArticleComponent } from "./ArticleComponent";

export const ArticlesContainer = () => { 
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.articles)
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch])
    

    

    return (
        <>
        {articles.map((article, index) => {
        return <ArticleComponent key={index} articleData={article} />
    })}
        </>
    )
}
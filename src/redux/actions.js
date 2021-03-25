import convert from 'xml-js'

export function fetchArticles() {
    return async dispatch => {
        const response = await fetch('https://sweb.ru/export/turbojournal/', {method: 'GET'})
        const text = await response.text()
        const data = await JSON.parse(convert.xml2json(text, {compact: true, spaces:2}));
        dispatch({type: "FETCH_ARTICLES", payload: data["rss"]["channel"]["item"]})
    }
}
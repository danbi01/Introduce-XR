import React, { useState, useEffect } from "react";

function News() {
    const [news, setNews] = useState([]);
    const searchNews = async () => {
        try {
            const res = await fetch(
                '/api/v1/search/news?query=XR&display=10',
                {
                    headers: {
                        'X-Naver-Client-Id': 'BTkEg3i4C8XrN9Got_Bz',
                        'X-Naver-Client-Secret': 'nHqNtF4IYh',
                    },
                }
            );
            const data = await res.json();
            setNews(data.items);
        } catch (err) {
            console.error(err);
        }
    };
    
    function decodeHTML(data) {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = data;
        return textarea.value;
    }

    useEffect(() => {
        searchNews();
    }, []);

    return (
        <div className="bg">
            <ul>
                {news.map((item, index) => (
                    <div className="newsItem" key={index}>
                    <li>
                        <a target="_blank" href={item.link} ><p className="title">{decodeHTML(item.title)}</p>
                        <p className="description" dangerouslySetInnerHTML={{ __html: item.description }} /></a>
                    </li></div>
                ))}
            </ul>
        </div>
    )
}

export default News;
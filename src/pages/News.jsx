import React, { useState, useEffect } from "react";

function News() {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);

    const searchNews = async () => {
        try {
            const res = await fetch(
                '/api/v1/search/news?query=XR&display=10&start=' + page*10,
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

    const ShowNews = () => {
        return news.map((item, index) => (
                    <div className="newsItem" key={index}>
                    <li>
                        <a target="_blank" href={item.link} ><p className="title" dangerouslySetInnerHTML={{ __html: decodeHTML(item.title) }}></p>
                        <p className="description" dangerouslySetInnerHTML={{ __html: item.description }} /></a>
                    </li></div>
                ))
    }
    
    function decodeHTML(data) {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = data;
        return textarea.value;
    }

    useEffect(() => {
        searchNews();
    }, [page]);

    return (
        <div className="bg">
            <h2>XR 최신 뉴스</h2>
            <ul>
                {ShowNews()}
                <div className="page">
                    <button disabled={page==1 && true} onClick={() => setPage( page - 1 )}>&lt; 이전</button>
                    &nbsp;&nbsp;<b>{page}</b>&nbsp;&nbsp;
                    <button onClick={() => setPage( page + 1 )}>다음 &gt;</button>
                    </div>
            </ul>
        </div>
    )
}

export default News;
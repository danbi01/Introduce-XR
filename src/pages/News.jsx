import React, { useState, useEffect } from "react";

function News() {
    const styles = {
        ul: {
            backgroundColor: "#f7f7f7",
            borderRadius: 40,
            listStyle: "none",
        },
        description: {
            width: 1000,
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
        }
    }

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

    useEffect(() => {
        searchNews();
    }, []);

    return (
        <div>
            <ul style={styles.ul}>
                {news.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.title}</a>
                        <p style={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News;
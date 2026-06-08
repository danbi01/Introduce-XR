import React, { useState, useEffect } from "react";

function News() {
    const styles = {
        bg: {
            margin: "0 auto",
            width: "80%"
        },
        ul: {
            backgroundColor: "#f7f7f7",
            borderRadius: 40,
            listStyle: "none",
        },
        newsItem: {
            // last-child
            borderBottom: "1px solid black",
            width: "90%"
        },
        li: {
            textAlign: "left",
            padding: "10px 0"
        },
        title: {
            fontSize: 18,
        },
        description: {
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
        <div style={styles.bg}>
            <ul style={styles.ul}>
                {news.map((item, index) => (
                    <div style={styles.newsItem}>
                    <li key={index} style={styles.li}>
                        <a target="_blank" href={item.link} style={styles.title}>{item.title}</a>
                        <p style={styles.description}>{item.description}</p>
                    </li></div>
                ))}
            </ul>
        </div>
    )
}

export default News;
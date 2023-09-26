function News(props) {
    let newsData = props.newsData


    return (
        <div>
            <h2>Weather-Related News</h2>
            <ul>
                {newsData.map((article) => (
                    <li key={article.title}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p>Source: {article.source.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News
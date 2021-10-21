import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './NewsList.scss';

// const sample = {
//   title: '성범',
//   description: 'stock increase!!! once',
//   url: 'https://www.naver.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수는 따로 선언
    const fetchData = async () => {
      // loading 중인 상태
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `category=${category}&`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}apiKey=d9f7906f687945fe93c03a8857038a46`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    // category props가 변경될 때만 비동기 호출을 하게 된다.
    // category 가 바뀌는 것을 보고 리렌더링을 해야한다.
  }, [category]);

  // articles 값이 설정되지 않으면 다음 코드가 동작하면 에러를 일으킴
  if (!articles || loading) {
    return <div className="NewsList">loading...</div>;
  }
  // key 값은 article의 고유값이 될 수 있는 url로 설정
  return (
    <div className="NewsList">
      {articles.map((article) => {
        // return 안하면 map 함수에서 반환값을 얻지를 못했었음... 이유를 모르겠네
        return <NewsItem key={article.url} article={article}></NewsItem>;
      })}
    </div>
  );
};

export default NewsList;

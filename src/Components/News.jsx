import React, { useEffect, useState } from 'react'
import axios from "axios";



function News() {
  const [news, setNews] = useState();

  useEffect(() => {
    axios
      .get(
        "https://www.tagesschau.de/api2u/search/?searchText=fc%20bayern&pageSize=1&resultPage=2"
      )
      .then((res) => {
       // debugger;
        setNews(res.data.searchResults[0].date);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
       <p>{news}</p>
        <h1>News</h1>
    </div>
  )
}

export default News
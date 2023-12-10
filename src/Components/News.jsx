import React, { useEffect, useState } from 'react'
import axios from "axios";



function Neus() {
  const [neus, setNeus] = useState();

  useEffect(() => {
    axios
      .get(
        "https://www.tagesschau.de/api2u/search/?searchText=fc%20bayern&pageSize=1&resultPage=2"
      )
      .then((res) => {
       // debugger;
        setNeus(res.data.searchResults[0].date);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
       <p>{neus}</p>
        <h1>News</h1>
    </div>
  )
}

export default Neus
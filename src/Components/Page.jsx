import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Page = () => {
  const {id} = useParams();//view how useParams() function works
  const [animeData,setAnimeData] = useState([]);

  useEffect(() => {
    const getAnimeData = async () =>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const data = await response.json();
      const usefulData =  await data.data;
      // console.log(usefulData);
      setAnimeData(usefulData);
    };
    //calling the function
    getAnimeData();
  },[]);



  return (
    <>
    {/* using ternery operators to display loading while loading the page  */}
    {animeData.length === 0 ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ):(
      <div class="card-container">
      <div class="cards">
          <h1>{animeData.title}</h1>
          <img src={animeData.images.webp.image_url} alt="Anime" />
          <div class="cards-trailer">
              <a href="{animeData.trailer.url}">Watch trailer on youtube</a>
          </div>
          <p class="cards-para"> {animeData.background}</p>
      </div>
    </div>
  )}
    </>
  )
}

export default Page

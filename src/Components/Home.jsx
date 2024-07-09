// rafce -boilerplate
import {useEffect,useState} from "react";


const Home = () => {
  // Use state 
  const [data,setData] = useState([ ]);

  // use Effect function
  useEffect(()=>{
    //async function inside useEffect 
    const getData = async() =>{
      //fetching data from jikan.moe/v4/anime api
      const response = await fetch("https://api.jikan.moe/v4/anime");
      //converting the response in json format 
      const data = await response.json();

      // getting the data element from the data array and setting it's value to usefulData variable
      const usefulData = await data.data;
      //setting the usefulData as data using the setData function
      setData(usefulData);

      // console.log(usefulData);
    };

    //calling the getData() function
    getData();

  },[]);


  return ( 
    <>
        <div>
          
          {data.map((id)=>(
            <div key={id.mal_id}> 
              {/* {} is used to use js inside here. */}
              
              <a href={`/page/${id.mal_id}`}>{id.title}</a>

            </div>
          ))}

        </div>
    </>

  )
}

export default Home


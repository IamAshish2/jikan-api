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

      console.log(usefulData);
    };

    //calling the getData() function
    getData();

  },[]);


  return ( 
    < >
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 bg-amber-900 ">
          {data.map((id)=>(

            <div key={id.mal_id} 
            className=" flex flex-col justify-center text-center p-3  w-72 m-3 border rounded-2xl"> 
               {/* {} is used to use js inside here. */}
               <div className="flex flex-col h-80 bg-contain" style= {{ backgroundImage:`url(${id.images.webp.large_image_url})`}}></div>

               <div className="text-red-300 text-sm mt-1 font-bold">
                {id.title}
              </div>

            </div>
          ))}

        </div>

    </>

  )
}

export default Home


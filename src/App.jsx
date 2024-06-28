import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NEWS_API } from './API_DATA/Api_URL';
function App() {
  const [newsData,setnewsData] = useState([]);
  const [country,setcountry] = useState("");
  console.log(country);
  const newsApi = ()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=da083256778d4c069bc37db6aeebff4f`)
      .then((res)=>{
          setnewsData(res.data.articles);           
      })
      .catch((err)=>{
          console.log(err , "Error came");
      })
  }
const getCountry = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=da083256778d4c069bc37db6aeebff4f`)
  .then((res)=>{
      setnewsData(res.data.articles);           
  })
  .catch((err)=>{
      console.log(err , "Error came");
  })
}
  useEffect(()=>{
    newsApi()
  },[])
  return (
    <div>
         <div className="container">
          <div className="row">
              <div className="col-md-10">
                  <select className='form-control' onChange={e=>setcountry(e.target.value)}>
                     <option value="in">INDIA</option>
                     <option value="us">USA</option>
                     <option value="jp">JAPAN</option>
                     <option value="ca">CANADA</option>
                     <option value="nz">NEWZLAND</option>
                     <option value="bg">BELGIUM</option>
                     <option value="si">SIII</option>
                     <option value="fr">FRANCE</option>
                  </select>
                  
              </div>
              <div className="col-md-2">
                  <button className='btn btn-success' onClick={getCountry}>GET DETAILS</button>
              </div>
          </div>
            <div className="row mt-3 mb-3">
                {
                    newsData.map((res)=>{
                         return(
                          <div className='col-md-4'>
                          <h6>{res.title}</h6>
                          <img src={res.urlToImage} className='img-fluid'/>
                          </div>
                         )
                    })
                }
            </div>
         </div>
    </div>
  )
}

export default App

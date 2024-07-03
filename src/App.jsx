import React, { useEffect, useState } from 'react'
import { news_API } from './API_DATA/Api_URL'
import axios from 'axios'
import { key_Val } from './API_DATA/Api_URL';
import About from './Pages/About';
function App() {
  const [newsApi,setnewsApi] = useState([]);
  const [country,setCountry] = useState("");
  const [category,setCategory] = useState("");
  const getCountry = (e)=>{
       setCountry(e.target.value);
  }
  const getCategory = (e)=>{
    setCategory(e.target.value)
  }
   const geteNewsAPi = ()=>{
         axios.get(`${news_API}country=us&apiKey=${key_Val}`)
         .then((res)=>{
             setnewsApi(res.data.articles);
         }).catch((err)=>{
            console.log(err, "error came from aimore");
         })
   }

   const showResults = ()=>{
    axios.get(`${news_API}country=${country}&category=${category}&apiKey=${key_Val}`)
    .then((res)=>{
        setnewsApi(res.data.articles);
    }).catch((err)=>{
       console.log(err);
    })
   }


   useEffect(()=>{
    geteNewsAPi()
   },[])
  return (
    <div>
        <About/>
         <div className="container">
            <div className="row">
              <h3>{newsApi.length}</h3>
                <div className="col-md-4">
                    <select onChange={getCountry} className='form-control'>
                      <option value="ae">Aregentina</option>
                      <option value="au">Asutralia</option>
                      <option value="bg">Belgium</option>
                      <option value="ca">Canada</option>
                      <option value="nz">Newzland</option>
                      <option value="in">India</option>
                      <option value="ru">Russia</option>
                      <option value="jp">Japan</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select onChange={getCategory} className='form-control'>
                      <option value="business">Business</option>
                      <option value="entertainment">entertainment</option>
                      <option value="general">general</option>
                      <option value="health">health</option>
                      <option value="science">science</option>
                      <option value="sports">sports</option>
                      <option value="technology">technology</option>                      
                    </select>
                </div>
                <div className="col-md-4">
                   <button className='btn btn-success' onClick={showResults}>CLICK</button>
                </div>
            </div>
         </div>

        
         <div className="container mt-5 mb-5">
            <div className="row">
                 {
                    newsApi.map((res,index)=>{
                       return(
                          <div className='col-md-4' key={index}>
                            <h2>{index}</h2>
                              <h5>{res.title}</h5>
                              <img src={res.urlToImage} alt="" className='img-fluid'/>
                              <p>{res.description}</p>
                              <p><span>Author:<b>{res.author} </b> Source:<b>{res.source.name}</b></span> </p>
                            <a href={res.url} className='btn btn-primary' target='_blank'>Read More</a>
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

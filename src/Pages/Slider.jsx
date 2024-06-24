import React from 'react'
import  imgone from "../images/one.jpeg";
import  imgtwo from "../images/two.jpeg";
function Slider() {
  return (
    <div>
        <h2></h2>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       
      <img src={imgone} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={imgtwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://srv.carbonads.net/static/30242/fba2b75980d7e962392c7481a2be33acdcf00528" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider

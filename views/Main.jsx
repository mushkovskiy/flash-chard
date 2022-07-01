const React = require('react');
const Layout = require('./Layout');
function Main() {
  return(
<Layout>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/photo1656683449 (5).jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/photo1656683449 (3).jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/photo1656683449 (4).jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>
</Layout>
  )
}
module.exports = Main;
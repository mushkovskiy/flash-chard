const React = require('react');
const Layout = require('./Layout');
function Main() {
  return(
<Layout>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://thumbs.dreamstime.com/z/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/z/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/z/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg" class="d-block w-100" alt="..."/>
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
const React = require('react');
const Layout = require('./Layout');
// 

module.exports = function Card({ theme }) {
  return (
    <Layout title={title}>
      {/* <div class="card text-center border-info mb-3 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;"> */}
      <div class="card text-center border-warning mb-3 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{theme.title}</h5>
          {/* <p class="card-text">С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.</p> */}
          {/* <a href={`/theme/${theme.id}`} class="btn btn-primary">Выбрать тему</a> */}
          <a href={`/theme/${theme.id}`} class="btn btn-outline-dark">Выбрать тему</a>
        </div>
      </div>
    </Layout>
  );
};
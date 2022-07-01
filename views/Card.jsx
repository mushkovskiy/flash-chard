const React = require('react');
const Layout = require('./Layout');
// 

module.exports = function Card({ theme }) {
  return (
   <>
    {/* <div className="card text-center border-info mb-3 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;"> */}
    <div className="card text-center border-warning mb-3 shadow p-3 mb-5 bg-white rounded" style={{ width: 18 + 'em' }}>
        <div className="card-body">
          <h5 className="card-title">{theme.title}</h5>
          {/* <p className="card-text">С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.</p> */}
          {/* <a href={`/theme/${theme.id}`} className="btn btn-primary">Выбрать тему</a> */}
          <a href={`/theme/${theme.id}`} className= "link-theme btn btn-outline-dark">Выбрать тему</a>
        </div>
      </div>
   </>
     
  );
};
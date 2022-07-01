const React = require('react');
const Layout = require('./Layout');

function QuestionField() {
  return (
    <Layout>
      <div  className="answer-container">
      <div><h1>{}</h1></div>
      <form method="post" action="/get/answer">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Your answer</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
    
        <button type="submit" className="btn btn-primary">Ответить</button>
      </form>
      <a href={`/theme/${theme.id}`} className="btn btn-outline-dark">Продолжить</a>
      </div>
     
    </Layout>

  );
}
module.exports = QuestionField;
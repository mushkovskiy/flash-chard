const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

        <link rel="stylesheet" type="text/css" href="/style.css" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />

        <title>Blog</title>
      </head>
      <body>
        {user ? (
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Мои результаты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> Привет! {user.username}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Выйти</a>
            </li>
          </ul>
        ) : (
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/log">Войти</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reg">Зарегестрироваться</a>
            </li>
          </ul>
        )}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;

const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
// 

module.exports = function Home({ getAllThemes, title, user }) {
  return (
    <Layout title={title} user = {user}>
      <div className='theme-container'>
        {getAllThemes.map((theme) => <Card theme={theme} />)}
      </div>
      <script defer src="/js/application.js"></script>
   
    </Layout>
  );
};

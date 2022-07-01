const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
// 

module.exports = function Home({ getAllThemes, title, user }) {
  return (
    <Layout title={title} user = {user}>
      <div>
        {getAllThemes.map((theme) => <Card theme={theme} />)}
      </div>
    </Layout>
  );
};

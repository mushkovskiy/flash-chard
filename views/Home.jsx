const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
// 

module.exports = function Home({ title, array }) {
  return (
    <Layout title={title}>
      <div>
        {array.map((theme) => <Card theme={theme} />)}
      </div>
    </Layout>
  );
};

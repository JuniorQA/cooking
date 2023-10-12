const React = require('react');
const Layout = require('./Layout');
module.exports = function Main(user) {
  console.log(user)
  return (
    <Layout>
      {/* {programms.map((programm) => (
              <>
                <Programm programm={programm} />
              </>
            ))} */}
    </Layout>
  );
};

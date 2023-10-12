const React = require('react')
const Layout = require('./Layout')

function RecipePage({title,recipe,user}) {
return(
  <Layout title={title} user={user}>
      <div className="card" style={{ width: '800px', backgroundColor: 'white' }}>
        <img src={car.image} className="card-imag-top" alt="recipe" />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p>{recipe.description}</p>
          <h5>{recipe.cooking_time} </h5>
        </div>
      </div>
  </Layout>
)


}

module.exports = RecipePage
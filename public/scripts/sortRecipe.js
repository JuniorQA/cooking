// const sortMethodContainer = document.querySelector('.sort-method-container')

// if (sortMethodContaine) {
//     sortMethodContaine.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       const { asc, desc } = e.target;

//       const res = await fetch('/', {
//         method: 'post',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({

//         }),
//       });
//       const data = await res.json();
//       console.log(data,'8888');

//       if (data.message === 'success') {
//         window.location.assign('/');
//       } else {
//         document.querySelector('.error').innerHTML = data.message;
//       }
//     });
//   }

function sortArray(array, sortSelect, sortType) {
  
  if (sortSelect === 'asc' && sortType === 'cooking-time') {
    array.sort((a, b) => a.cooking_time - b.cooking_time);
  } else if (sortSelect === 'desc' && sortType === 'cooking-time') {
    array.sort((a, b) => b.cooking_time - a.cooking_time);
  }
}
module.exports = sortArray;

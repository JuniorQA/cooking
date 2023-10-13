const container = document.querySelector('.recipes-container');

if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-favorite')) {
      const card = e.target.closest('.recipe-item-container');
      const { id } = card.dataset;
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });
      const data = await res.json();
      console.log(data);
    }

    if (e.target.classList.contains('btn-remove-favorite')) {
      const card = e.target.closest('.recipe-item-container');
      const { id } = card.dataset;

      const res = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
      } else {
        alert(data.message);
      }
    }
  });
}

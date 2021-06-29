  
async function newGamesHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#games').value.trim();
    const notes = document.querySelector('#notes').value.trim();

    const response = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        notes
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/inventory');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-games').addEventListener('submit', newGamesHandler);
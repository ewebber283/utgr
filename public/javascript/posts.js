  
async function newPostsHandler(event) {
    event.preventDefault();
  
    const post = document.querySelector('#posts').value.trim();
    const comments = document.querySelector('#comments').value.trim();

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post,
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-posts').addEventListener('submit', newGamesHandler);
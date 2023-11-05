function fetchPosts() {
    fetch('https://mocki.io/v1/d5f8030d-7192-4bed-a089-7cbd8a27885f')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error');
        }
        return response.json();
      })
      .then(postsData => {
        console.log(postsData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

fetchPosts()
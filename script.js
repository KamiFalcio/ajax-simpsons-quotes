function fetchSimpsonJSON() {
    
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsonTabl) {
        const simp = simpsonTabl.shift();
        const simpsonHtml = `
        <h2>${simp.character}</h2>
        <img src=${simp.image} alt="image"></img>
        <p>${simp.quote}</p>
        `;
        document.querySelector('#chuck-norris').innerHTML = simpsonHtml;
      });
  }
  
  fetchSimpsonJSON();
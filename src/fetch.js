export default fetch(
  "https://core.ac.uk:443/api-v2/search/english?page=1&pageSize=10&apiKey=lNIYhSJ5kVrLUsK0tZWnPjAg89efqoGm"
).then((response) => response.json().then((data) => console.log(data)));

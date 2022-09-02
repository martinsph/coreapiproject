import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Search() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    fetch(
      "https://core.ac.uk:443/api-v2/search/english?page=1&pageSize=10&apiKey=lNIYhSJ5kVrLUsK0tZWnPjAg89efqoGm"
    ).then((response) =>
      response.json().then((result) => setData(result.data))
    );
  }, []);

  function listMap(array) {
    array.map((item) => (
      <ul>
        <li>{item}</li>
      </ul>
    ));
  }

  const handleChange = () => {};
  const handleClick = () => {};
  console.log(data);

  return (
    <div>
      <label>
        Search:
        <input
          className="input_search"
          type="text"
          value=""
          placeholder="type your search"
          onChange={handleChange}
        />
      </label>
      <button type="button" className="button_search" onClick={handleClick}>
        Buscar
      </button>
      <div>
        {data.map((item) => (
          <ul key={item._id}>
            <li>
              {item._source.authors.map((author) => {
                return (
                  <ul>
                    <li>{author}</li>
                  </ul>
                );
              })}
            </li>
            <li>{item._type}</li>
            <li>{item._source.title}</li>
            <li>
              {item._source.description ? item._source.description : "n/a"}
            </li>
            <li>{item._source.urls ? listMap(item._source.urls) : "n/a"}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

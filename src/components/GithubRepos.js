import React, { useState, useEffect } from "react";
import "./Styles/GithubRepos.scss";

const GithubRepos = ({ username }) => {
  const [person, setPerson] = useState();
  const [size, setSize] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  }, []);

  return (
    <div className="repos-container">
      {person ? (
        <div>
          {person.slice(0, 10).map((p) => (
            <div className="repos-box">
              <hr />
              <h2>
                <a className="repos-name" href={p.html_url}>
                  {p.name}
                </a>
              </h2>
              <p>Id : {p.id}</p>

              <p>Size: {p.size}</p>
              <p>Language: {p.language}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data in the state</p>
      )}
    </div>
  );
};

export default GithubRepos;

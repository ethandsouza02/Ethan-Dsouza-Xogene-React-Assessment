import React from "react";

async function getDrugs(drug) {
  const url = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

function Search() {
  return (
    <div className="main-container">
      <div className="search-container">
        <p>SEARCH FOR DRUGS</p>
        <input id="input-container" placeholder="Search"></input>
        <button
          className="search-button"
          onClick={() =>
            getDrugs(document.getElementById("input-container").value)
          }
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

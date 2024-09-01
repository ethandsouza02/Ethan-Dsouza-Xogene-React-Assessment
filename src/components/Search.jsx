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

async function getSuggestions(keys) {
  const url = `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${keys}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    UpdateSuggestions(json["suggestionGroup"]["suggestionList"]["suggestion"]);
    return json["suggestionGroup"]["suggestionList"]["suggestion"];
  } catch (e) {
    console.log(e);
  }
}

function UpdateSuggestions(suggestions) {
  var list = "<ul>";
  suggestions.forEach((element) => {
    list += `<li>${element}</li>`;
  });
  list += "</ul>";
  document.getElementById("suggestions").innerHTML = list;
}
function Search() {
  return (
    <div className="main-container">
      <div className="search-container">
        <p>SEARCH FOR DRUGS</p>
        <input
          id="input-container"
          placeholder="Search"
          onChange={() =>
            getSuggestions(document.getElementById("input-container").value)
          }
        ></input>
        <button
          className="search-button"
          onClick={() =>
            (window.location.href =
              "/DrugDetails?name=" +
              document.getElementById("input-container").value)
          }
        >
          Search
        </button>
        <div id="suggestions"></div>
      </div>
    </div>
  );
}

export default Search;

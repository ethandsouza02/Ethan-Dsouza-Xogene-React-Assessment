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

function Drugs() {
  let params = new URLSearchParams(document.location.search);
  let name = params.get("name");
  document.getElementsByTagName();

  return (
    <div>
      <p></p>
    </div>
  );
}

export default Drugs;

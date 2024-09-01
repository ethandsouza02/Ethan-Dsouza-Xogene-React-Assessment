import React, { useEffect, useState } from "react";

async function getDrugs(drug) {
  const url = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function Drugs() {
  const [name, setName] = useState("");
  const [drugData, setDrugData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, []);

  useEffect(() => {
    if (name) {
      getDrugs(name).then((data) => setDrugData(data));
    }
  }, [name]);

  return (
    <div>
      <p>Drug name: {name}</p>
      {drugData ? (
        <pre>{JSON.stringify(drugData, null, 2)}</pre>
      ) : (
        <p>Loading drug data...</p>
      )}
    </div>
  );
}

export default Drugs;

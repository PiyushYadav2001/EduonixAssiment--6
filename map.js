//question 1
const countryCapitalMap = new Map();

//add form map
countryCapitalMap.set("USA", "Washington, D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Germany", "Berlin");
countryCapitalMap.set("Japan", "Tokyo");
countryCapitalMap.set("India", "Delhi");


console.log("Countries and Capitals:");
for (const [country, capital] of countryCapitalMap) {
    alert(`${country}: ${capital}`);  //print form map
}
countryCapitalMap.delete("Japan");//remove form map
for (const [country, capital] of countryCapitalMap) {
    console.log(`${country}: ${capital}`);
}

if(countryCapitalMap.has("India")){  //Check if a specific key exists in the Map.
    alert("yes its exist");
}else{
    alert("its Not");
}
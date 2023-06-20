function nonMutatingSplice(cities) {
    return cities.slice(0,3);
    }
  
  const inputCities = ["Chicago", "Delhi", "Kathmandu", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));
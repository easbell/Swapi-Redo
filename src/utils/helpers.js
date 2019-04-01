export const cleanVehicles = (data) => {
  return data.map(info => {
    return ({Name: info.name, Model: info.model, Class: info.vehicle_class, Passengers: info.passengers})
  })
}

export const cleanPlanets = (planetArray) => {
  const planets = planetArray.map(planet => {
    return {Name: planet.name, Terrain: planet.terrain, Population: planet.population, Climate: planet.climate}
  })
  return planets
}

export const combineInfo = (homeworlds, species) => {
  let allPeople = [];
  homeworlds.forEach((person, i) => {
    allPeople.push({...person, ...species[i]})
  });
  return allPeople;
}

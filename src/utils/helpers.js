export const cleanVehicles = (data) => {
  return data.map(info => {
    return ({Name: info.name, Model: info.model, Class: info.vehicle_class, Passengers: info.passengers})
  })
}

export const cleanPlanets = (planetArray) => {
  const unresolvedPromises = planetArray.map(planet => {
    return {Name: planet.name, Terrain: planet.terrain, Population: planet.population, Climate: planet.climate}
  })
  return Promise.all(unresolvedPromises)
}
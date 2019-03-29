export const cleanVehicles = (data) => {
  return data.map(info => {
    return ({Name: info.name, Model: info.model, Class: info.vehicle_class, Passengers: info.passengers})
  })
}
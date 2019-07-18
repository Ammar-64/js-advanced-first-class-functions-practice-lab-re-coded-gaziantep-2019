// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(driver => console.log(driver.name));
}
function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) { console.log(driver.name) }
  })
}
function driversByRevenue(drivers) {
  return drivers.slice().sort( (a, b) => {return a.revenue - b.revenue} )
}
function driversByName(drivers) {
  return drivers.slice().sort( (a, b) => {return a.name.localeCompare(b.name)} )
}
function totalRevenue(drivers) {
  let total = 0;
  return drivers.reduce((total, driver) => {return total += driver.revenue})
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}

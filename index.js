

function findMatching(drivers, attribute){
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === attribute.toLowerCase() })
    
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() }) 
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, attribute){
    return drivers.filter(function (driver) {
        return driver.name === attribute}
        )
  }
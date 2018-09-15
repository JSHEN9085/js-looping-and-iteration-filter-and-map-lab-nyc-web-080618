// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  var newDrivers = [];
  for (const driver of drivers){
    if (driver.revenue > Number(revenue)){
        newDrivers.push(driver);
    }
  }
  return newDrivers;
}


function driverNamesWithRevenueOver(drivers, revenue){
  var newDrivers = [];
  for (const driver of drivers){
    if (driver.revenue > Number(revenue)){
      newDrivers.push(driver.name);
    }
  }
  return newDrivers;
}


function exactMatch(drivers, input){
  var newDrivers = [];
  for (const driver of drivers){
    if (driver.name === input.name || driver.revenue === Number(input.revenue)){
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}

function exactMatchToList(drivers, input){
  var newDrivers = [];
  for (const driver of drivers){
    if (driver.name === input.name || driver.revenue === Number(input.revenue)){
      newDrivers.push(driver.name);
    }
  }
  return newDrivers;
}

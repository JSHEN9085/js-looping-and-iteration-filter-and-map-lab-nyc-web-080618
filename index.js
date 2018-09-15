// Code your solution here:
//Question 1
// V1
// function driversWithRevenueOver(drivers, revenue){
//   var newDrivers = [];
//   for (const driver of drivers){
//     if (driver.revenue > Number(revenue)){
//         newDrivers.push(driver);
//     }
//   }
//   return newDrivers;
// }
// Final Version
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > Number(revenue));
}

//Question 2
// V1
// function driverNamesWithRevenueOver(drivers, revenue){
//   var newDrivers = [];
//   for (const driver of drivers){
//     if (driver.revenue > Number(revenue)){
//       newDrivers.push(driver.name);
//     }
//   }
//   return newDrivers;
// }
// Final Version
function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > Number(revenue)).map(driver => driver.name);
}


//Question 3
//V1
// function exactMatch(drivers, input){
//   var newDrivers = [];
//   for (const driver of drivers){
//     if (driver.name === input.name || driver.revenue === Number(input.revenue)){
//       newDrivers.push(driver);
//     }
//   }
//   return newDrivers;
// }
// Final Version
function exactMatch(drivers, input){
  return drivers.filter(function(driver) {
    return driver.name === input.name || driver.revenue === Number(input.revenue);
  })
}


//Question 4
//V1
// function exactMatchToList(drivers, input){
//   var newDrivers = [];
//   for (const driver of drivers){
//     if (driver.name === input.name || driver.revenue === Number(input.revenue)){
//       newDrivers.push(driver.name);
//     }
//   }
//   return newDrivers;
// }
// Final Version
function exactMatchToList(drivers, input){
  return exactMatch(drivers, input).map(driver => driver.name);
}

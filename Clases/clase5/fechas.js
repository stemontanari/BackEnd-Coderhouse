let moment = require ('moment')
let Fechas = require ('./controladorFechas')
let birthday = moment ('16/02/2001', 'DD/MM/YYYY')
let obj = new Fechas(birthday)

console.log(`TODAY ${obj.getToday()}`);
console.log(`YEARS ${obj.getAllYears()}`);
console.log(`DAYS ${obj.getAllDays()}`);
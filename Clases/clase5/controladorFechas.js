// PUNTO 3 (Utilizando moment calcular dias y a;os transcurridos desde que naci)
let moment = require('moment');

class Fechas {
    constructor(birth ){
        this.birthday = birth;
        this.today = moment();
    }

    getToday(){
        return this.today.format('LLLL')
    }

    getAllYears(){
        return this.today.diff(this.birthday, 'years', true)
    }

    getAllDays(){
        return this.today.diff(this.birthday, 'days', true)
    }
}

module.exports = Fechas;
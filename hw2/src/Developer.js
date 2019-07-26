export class Developer {
    constructor(name = 'User', surname = 'Userovich') {
        this.name = name;
        this.surname = surname;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

}
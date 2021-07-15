class Recangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    showArea() {
        return `Kwadrat ma ${this.width} długości i ${this.height} szerokości. Jego pole wynosi ${this.height * this.width}`
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    showArea() {
        return `Koło ma promień o długości ${this.radius}. Jego pole wynosi ${3,1415 * this.radius * this.radius}`
}
}

const newRec = new Recangle(3,5);
console.log(newRec.showArea());

const newCircle = new Circle(10);
console.log(newCircle.showArea());
console.log('---------------');

class currentUser {
    constructor(name, surname, email, www, userType, isActive) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.www = www;
        this.userType = userType;
        this.active = isActive;
    }
    show() {
        return `User details: \nName: ${this.name} \nSurname: ${this.surname} \nEmail: ${this.email} \nWebsite: ${this.www} \nType: ${this.userType} \nStatus: ${this.active}`
    }
    setActive(isActive) {
        this.active = isActive;
    }
}

const newUser = new currentUser('Wojtek', 'Ojtek', 'wojtekojtek@wp.pl', 'www.onet.pl', 'standrad', 'True');
newUser.setActive('False');
console.log(newUser.show());

console.log('-----------------');

class Book {
    constructor(title, author, pageCount, publisher) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.publisher = publisher;
    }
    showDetails() {
        for (let [key, value] of Object.entries(Book)) {
            return `${key}: ${value}`
        }

    }
}

const newBook1 = new Book('Jak znaleźć cośtam', 'Steve Wonder', 325, 'Book.ing');
const newBook2 = new Book('Moje wspomnienia ze starosci', 'Jaś Kapela', 12, 'nie_wiadomo.C.O');
console.log(newBook1.showDetails());


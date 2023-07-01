//TASK 1 Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null) {
        this.name = name;                
        this.releaseDate = releaseDate;  
        this.pagesCount = pagesCount;    
        this._state = 100;                
        this.type = type;                
    }

    fix() {
        this.state = this.state * 1.5;    
    }
    //контроль состояния книги
    set state(newState) { //получаем значение
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() { //возвращаем значение
        return this._state;
    }    
  }

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
} 

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}   

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';    
    }
}

const Sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

const magazineSherlock = new Magazine(
    'Журнал о Шерлоке',
    2023,
    777
);

const bookSherlock = new Book(
    'Артур Конан Дойл',
    'Книга о Шерлоке',
    2020,
    555,
);

const detective = new DetectiveBook(
    'Автор детектива',
    'Книга детектив',
    2023,
    1555,
);


// console.log(Sherlock);
// console.log(magazineSherlock);
// console.log(bookSherlock);
// console.log(detective);

//Task 2 Library  
class Library {
    constructor(name) {
        this.name = name;                
        this.books = [];                
    }
    
    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
            return 'Книга успешно добавлена';
        }
        return 'Книга в плохом состоянии';
    }

    findBookBy(key, value) {
        const foundBook = this.books.find(book => book[key] === value);
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            const book = this.books[bookIndex];
            this.books.splice(bookIndex, 1);
            return book;
        }
        return null;
    }
}

const library = new Library('Библиотека');

library.addBook(bookSherlock);
library.addBook(magazineSherlock);
library.addBook(detective);

console.log(library);
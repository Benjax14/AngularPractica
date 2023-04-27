import { Component, OnInit } from '@angular/core';
import { Book } from 'src/domain/book';
import { bookService } from 'src/service/bookService';

interface speciality {
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    speciality: speciality[];
    booklist: Book[];
    date: Date | string;
    date2: Date | string;
    selectBook!: speciality;
    nameBook: string;
    pages: number;
    filteredList: Book[];


    filterList() {

        if(this.nameBook){
            this.filteredList = this.booklist.filter(
                (item) => item.name && item.name.toLowerCase().includes(this.nameBook.toLowerCase())
                );
        }
        else if(this.pages)
        {
            this.filteredList = this.booklist.filter(
                (item) => item.quantity && item.quantity >= this.pages
            )
        }
        else if(this.selectBook)
        {
            this.filteredList = this.booklist.filter(
                (item) => item.speciality && item.speciality == this.selectBook.name
            )
        }
        else if(this.date)
        {
            this.filteredList = this.booklist.filter(
                (item) => item.date && item.date >= this.date && item.date <= this.date2
            )
        }

    }

    constructor(private bookService: bookService) {
        this.speciality = [];
        this.booklist = [];
        this.nameBook = "";
        this.pages = 0;
        this.filteredList = [];
        this.date = "";
        this.date2 = "";
    }
    
    ngOnInit() {
        this.speciality = [
            { name: 'Matematicas' },
            { name: 'Literatura' },
            { name: 'Quimica' },
            { name: 'Educativo' },
            { name: 'Historia' },
            { name: 'Fisica'},
            {name: 'Lenguaje'}
        ];

        this.bookService.getBooks().then((data) => {
            this.booklist = data;
            this.filteredList = data;
        });
    }
}


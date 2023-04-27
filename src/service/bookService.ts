import { Injectable } from '@angular/core';

@Injectable()
export class bookService {
    getBooksData(){
        return [
            {
                id: '1000',
                name: 'Bamboo Watch',
                date: new Date(2022,2,21),
                speciality: 'Matematicas',
                quantity: 24,
            },
            {
                id: '1001',
                name: 'QyF Ejercicos',
                date: new Date(2002, 1, 2),
                speciality: 'Quimica',
                quantity: 200,
            },
            {
                id: '1002',
                name: 'Introducción a la Física',
                date: new Date(2005,6,15),
                speciality: 'Fisica',
                quantity: 50,
              },
              {
                id: '1003',
                name: 'Historia de México',
                date: new Date(2010,9,2),
                speciality: 'Historia',
                quantity: 30,
              },
              {
                id: '1004',
                name: 'Gramática Española',
                date: new Date(2018,3,10),
                speciality: 'Lenguaje',
                quantity: 80,
              },
              {
                id: '1005',
                name: 'El Quijote de la Mancha',
                date: new Date(1605,1,1),
                speciality: 'Literatura',
                quantity: 5,
              },
              {
                id: '1006',
                name: 'Matemáticas Avanzadas para Ingenieros',
                date: new Date(2016,12,20),
                speciality: 'Matematicas',
                quantity: 20,
              }
        ]
    }
    getBooks() {
        return Promise.resolve(this.getBooksData());
    };
}


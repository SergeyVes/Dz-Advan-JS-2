// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.



class Library {
    #books = [];

    constructor(books) {
        const uniqueBooks = new Set(books);
        if (uniqueBooks.size !== books.length) {
            throw new Error('Список содержит дубликаты');
        }
        this.#books = books;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Книга есть в библиотеке');
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const bookIndex = this.#books.indexOf(title);
        if (bookIndex === -1) {
            throw new Error('Книги нет в библиотеке');
        }
        this.#books.splice(bookIndex, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

const newLibrary = new Library(['Book1', 'Book2', 'Book3']);

console.log(newLibrary.allBooks);

newLibrary.addBook('Book4');
newLibrary.addBook('Book5');
newLibrary.addBook('Book6');
console.log(newLibrary.allBooks);


newLibrary.removeBook('Book6');
console.log(newLibrary.allBooks);

console.log(newLibrary.hasBook('Book1'));


/* Задание 2.
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие 
или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, 
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
*/

const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];
  
  const inputElem = document.querySelector('.input_text');
  const buttonElem = document.querySelector('.button');
  const reviewElem = document.querySelector('.review');
  const errorElem = document.querySelector('.error');
  
  initialData.forEach(element => {
      const productName = document.createElement('h2');
      productName.textContent = element.product;
      reviewElem.appendChild(productName);
      element.reviews.forEach(elem => {
          const allReviews = document.createElement('p');
          allReviews.textContent = elem.text;
          reviewElem.appendChild(allReviews);
      });
  });
  
  
  buttonElem.addEventListener('click', function () {
    console.log('ok');
      try {
          if (inputElem.value.trim().length < 20 || inputElem.value.trim().length > 500) {
              throw new Error ('Неверная длина текста')
          }
          const newReview = document.createElement('p');
          newReview.textContent = (inputElem.value);
          reviewElem.appendChild(newReview);
          errorElem.textContent = '';
      } catch (error) {
        errorElem.textContent = error.message;
      }
  });


  
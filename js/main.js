// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let b = {
  title: 'One',
  pageCOunt: 1,
  genre: '1'
}
let c = {
  title: 'Two',
  pageCOunt: 2,
  genre: '2'
}
let d = {
  title: 'Three',
  pageCOunt: 3,
  genre: '3'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let e = {
  title: 'One',
  pageCOunt: 1,
  genre: '1',
  authors: [{
    name: 'first',
    age: 1
  }, {
    name: 'second',
    age: 2
  }]
}
let f = {
  title: 'Two',
  pageCOunt: 2,
  genre: '2',
  authors: [{
    name: 'first',
    age: 1
  }, {
    name: 'second',
    age: 2
  }]
}
let g = {
  title: 'Three',
  pageCOunt: 3,
  genre: '3',
  authors: [{
    name: 'first',
    age: 1
  }, {
    name: 'second',
    age: 2
  }]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 let users=[{
  name:'one',
   username:'one1',
   password:'1111'
 },{
   name:'two',
   username:'two2',
   password:'2222'
 },{
   name:'three',
   username:'three3',
   password:'3333'
 },{
   name:'four',
   username:'four4',
   password:'4444'
 },{
   name:'five',
   username:'five5',
   password:'5555'
 },{
   name:'six',
   username:'six6',
   password:'6666'
 },{
   name:'seven',
   username:'seven7',
   password:'7777'
 },{
   name:'eignt',
   username:'eignt8',
   password:'8888'
 },{
   name:'nine',
   username:'nine9',
   password:'9999'
 },{
   name:'ten',
   username:'ten10',
   password:'10101010'
 },]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


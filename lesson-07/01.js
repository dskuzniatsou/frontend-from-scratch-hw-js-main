/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  return str.replace(/(?:^|\s)(\S)/ug, m => m.toUpperCase());
}
// function capitalizeWords(str) {
//   return str.split(' ') // Шаг 1: Разделяем строку на массив слов
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Шаг 2: Капитализируем первое слово
//             .join(' '); // Шаг 3: Объединяем массив обратно в строку
// }
console.log(capitalizeWords('hello world from javascript'));
const paragrah = "the quiek brown fox jumps over the lazy dog. If the dog barked , was a really lazy?"
const serchTerm = "dog";

console.log(paragrah.lastIndexOf(serchTerm));

console.log(paragrah.indexOf(serchTerm[2]));
console.log(paragrah.indexOf(serchTerm[1]));
console.log(paragrah.indexOf(serchTerm[0]));
console.log(paragrah.indexOf(serchTerm[-1]));
// Почему [-1], [10] или [-11] = [-1]? потому что он считает каждую букву в строке как место положение как в массиве и начинет считать каждую букву начиная с 0 поэтому все что -1 или больше длины строки что мы ишем он выдает([-1] = не найдено) 
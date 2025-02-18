const paragrah = "the quiek brown fox jumps over the lazy dog. If the dog barked , was a really lazy?"
const serchTerm = "dog";

let int = paragrah.indexOf(serchTerm);

console.log(paragrah.lastIndexOf(serchTerm, int+1));

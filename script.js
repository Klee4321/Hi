let getFactButton = document.getElementById('add-facts');

getFactButton.addEventListener('click', function() {
  let facts = document.getElementById('facts')
  let newFact = prompt('Enter a new fact:')
  let createListItem = document.createElement('li')
  createListItem.textContent = newFact
  facts.appendChild(createListItem)
})
//Image slider

let pictures = ['images/genshin 1.png', 'images/genshin 2.png', 'images/genshin children.png', 'images/Kazhua.png', 'images/Klee.png', 'images/Nahida.png', ' images/sanrio cats.png', '']
let currentIndex = 0;

function changeImage(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % pictures.length;
  }
  if (direction === 'previous') {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
  }
  let picture = document.getElementById('image');
  picture.src = pictures[currentIndex];
  
}
 document.getElementById('left').addEventListener('click', function(){
   changeImage('previous')
 })

document.getElementById('right').addEventListener('click', function(){
  changeImage('next' )
})
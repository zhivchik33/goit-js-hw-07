

const arrayOfLi = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${arrayOfLi.length}`);

arrayOfLi.forEach(array => {
  const categoryName = array.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`)
  const liCount = array.querySelectorAll('ul li').length
  console.log(liCount);
})
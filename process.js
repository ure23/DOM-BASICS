const main = document.getElementById('main');
const section = main.firstElementChild.nextElementSibling; 
const outerArticle = section.firstElementChild;            
const innerArticle = outerArticle.lastElementChild;        
const product = innerArticle.children;                    

const products = Array.from(main
  .firstElementChild             
  .nextElementSibling            
  .firstElementChild             
  .lastElementChild              
  .children);                     

  console.log(products);


products.forEach(product => {
product.addEventListener('click', () => {
const productName = document.createElement('h5');
productName.innerText = product.firstElementChild.innerText;

    console.log(productName);

  });
});
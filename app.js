'strict';
function productList (filePath, properties, timesShown,timesClicked){
  this.filePath = filePath;
  this.properties = properties;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;

}

// userInputStoreForm.addEventListener('submit', handleSubmit);
//
// function handleSubmit(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   var productChoice = event.target.product.value;

var bag = new productList('img/bag.jpg','R2-D2 Luggage');
console.log(bag.productList());

'strict';
function CatalogItem (filePath, properties, timesShown, timesClicked){
  this.filePath = filePath;
  this.properties = properties;
  this.timesShown = 0;
  this.timesClicked = 0;

};

//Item List
var rTwoBag = new CatalogItem('img/bag.jpg', 'bag');
var bananaCutter = new CatalogItem('img/banana.jpg','banana');
var bathroomStand = new CatalogItem('img/bathroom.jpg','bathroom');
var rainBoots = new CatalogItem('img/boots.jpg','boots');
var breakfastMaker = new CatalogItem('img/breakfast.jpg','breakfast');
var meatGum = new CatalogItem('img/bubblegum.jpg','bubblegum');
var chairHump = new CatalogItem('img/chair.jpg','chair');
var cthulhuToy = new CatalogItem('img/cthulhu.jpg','cthulhu');
var dogDuck = new CatalogItem('img/dog-duck.jpg','dogDuck');
var dragonCan = new CatalogItem('img/dragon.jpg','dragon');
var penCap = new CatalogItem('img/pen.jpg','pen');
var petSweep = new CatalogItem('img/pet-sweep.jpg','petSweep');
var pizzaCutter = new CatalogItem('img/scissors.jpg','scissors');
var sharkBag = new CatalogItem('img/shark.jpg','shark');
var babySweep = new CatalogItem('img/sweep.png','sweep');
var tauntaunBag = new CatalogItem('img/tauntaun.jpg','tauntaun');
var unicornCan = new CatalogItem('img/unicorn.jpg','unicorn');
var tentacleUsb = new CatalogItem('img/usb.gif','usb');
var wateringCan = new CatalogItem('img/watering-can.jpg','wateringCan');
var wineGlass = new CatalogItem('img/wine-glass.jpg','wineGlass');
console.log(rTwoBag);

//Item Array
var items = [rTwoBag,bananaCutter,bathroomStand,rainBoots,breakfastMaker,meatGum,chairHump,cthulhuToy,dogDuck,dragonCan,penCap,petSweep,pizzaCutter,sharkBag,babySweep,tauntaunBag,unicornCan,tentacleUsb,wateringCan,wineGlass];
console.log(Items);

//Random number generator
function randomPick(){
  return Math.floor(Math.random() * items.length);

}
//Creates image node
function drawCatalogItem(itemToDraw){
  console.log(itemToDraw);
  var imageEl = document.createElement('img');
  var formEl = document.getElementById('product-pick');
  formEl.appendChild(imageEl);
  imageEl.src = itemToDraw.filePath;
};

drawCatalogItem(wineGlass);
drawCatalogItem(tentacleUsb);
drawCatalogItem(pizzaCutter);

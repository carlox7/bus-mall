'strict';
//html nodes
var picContainer = document.getElementById('picture-container');
var ItemPictureLeft = document.getElementById('left');
var ItemPictureCenter = document.getElementById('center');
var ItemPictureRight = document.getElementById('right');

//click variables
var totalClicks = 0;
var clickLimit = 25;
var itemsCurrentlyShowing = [];

function CatalogItem (filePath, properties){
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
var wateringCan = new CatalogItem('img/water-can.jpg','wateringCan');
var wineGlass = new CatalogItem('img/wine-glass.jpg','wineGlass');

//Item Array
var items = [rTwoBag,bananaCutter,bathroomStand,rainBoots,breakfastMaker,meatGum,chairHump,cthulhuToy,dogDuck,dragonCan,penCap,petSweep,pizzaCutter,sharkBag,babySweep,tauntaunBag,unicornCan,tentacleUsb,wateringCan,wineGlass];
console.log(items);

//Random number generator
function randomPick(){
  return Math.floor(Math.random() * items.length);
};

//Stored random numbers
var itemLeft = randomPick();
var itemCenter = randomPick();
var itemRight = randomPick();
console.log(itemLeft);
console.log(itemCenter);
console.log(itemRight);

var leftItemPicture = items[itemLeft];
var centerItemPicture = items[itemCenter];
var rightItemPicture = items[itemRight];
console.log(leftItemPicture);
console.log(centerItemPicture);
console.log(rightItemPicture);
//Aaray for random three picks
var randomThreePicks = [];

//Pick three random numbers to push to aaray
function itemPick(){
  for(var i = 0; i < 3; i++){
    var currentItem = Math.floor(Math.random() * items.length);
    randomThreePicks.push(currentItem);
  }
};
itemPick();
console.log(randomThreePicks);

//Creates image node
function drawLeftItem(itemToDraw){
  var imageLeft = document.createElement('img');
  var formLeft = document.getElementById('left');
  formLeft.appendChild(imageLeft);
  imageLeft.src = itemToDraw.filePath;
};

function drawCenterItem(itemToDraw){
  // console.log(itemToDraw);
  var imageCenter = document.createElement('img');
  var formCenter = document.getElementById('center');
  formCenter.appendChild(imageCenter);
  imageCenter.src = itemToDraw.filePath;
};

function drawRightItem(itemToDraw){
  // console.log(itemToDraw);
  var imageRight = document.createElement('img');
  var formRight = document.getElementById('right');
  formRight.appendChild(imageRight);
  imageRight.src = itemToDraw.filePath;
};
//draws figure
console.log(itemCenter);
console.log(itemLeft);
console.log(items[itemCenter]);
console.log(items[itemLeft]);
drawCenterItem(items[itemCenter]);
drawLeftItem(items[itemLeft]);
drawRightItem(items[itemRight]);


// userInputStoreForm.addEventListener('click', handleClick);
//
// function handleClick(event) {
//   event.preventDefault();
//   event.stopPropagation();
//
//   var itemClick = event.target.productPick.value;
//};

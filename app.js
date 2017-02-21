'strict';
function catalogItem (filePath, properties, timesShown, timesClicked){
  this.filePath = filePath;
  this.properties = properties;
  this.timesShown = 0;
  this.timesClicked = 0;

};

// userInputStoreForm.addEventListener('submit', handleSubmit);
//
// function handleSubmit(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   var productChoice = event.target.product.value;

//Item List
var rTwoBag = new catalogItem('img/bag.jpg', 'R2D2 Luggage');
var bananaCutter = new catalogItem('img/banana.jpg','Banana Slicer');
var bathroomStand = new catalogItem('img/bathroom.jpg','Ipad Bathroom Stand');
var rainBoots = new catalogItem('img/boots.jpg','Rain Boot Sandals');
var breakfastMaker = new catalogItem('img/breakfast.jpg','All in One Breakfast Maker');
var meatGum = new catalogItem('img/bubblegum.jpg','Meatball Bubblegum');
var chairHump = new catalogItem('img/chair.jpg','Posture destroying chair');
var cthulhuToy = new catalogItem('img/cthulhu.jpg','Cthulhu Action Figure');
var dogDuck = new catalogItem('img/dog-duck.jpg','Dog Duck Beak Muzzle');
var dragonCan = new catalogItem('img/dragon.jpg','Can of Dragon Meat');
var penCap = new catalogItem('img/pen.jpg','Pen Cap Utinsils');
var petSweep = new catalogItem('img/pet-sweep.jpg','Pet Sweeper Footies');
var pizzaCutter = new catalogItem('img/scissors.jpg','Pizza Scissors');
var sharkBag = new catalogItem('img/shark.jpg','Shark Sleeping Bag');
var babySweep = new catalogItem('img/sweep.png','Baby Sweeper Onesie');
var tauntaunBag = new catalogItem('img/tauntaun.jpg','Tauntaun Sleeping Bag');
var unicornCan = new catalogItem('img/unicorn.jpg','Can of Unicorn Meat');
var tentacleUsb = new catalogItem('img/usb.gif','Tentacle USB Drive');
var wateringCan = new catalogItem('img/watering-can.jpg','Self Watering Watering Can');
var wineGlass = new catalogItem('img/wine-glass.jpg','Wine Glass Dome');
console.log(rTwoBag);

var Items = [rTwoBag,bananaCutter,bathroomStand,rainBoots,breakfastMaker,meatGum,chairHump,cthulhuToy,dogDuck,dragonCan,penCap,petSweep,pizzaCutter,sharkBag,babySweep,tauntaunBag,unicornCan,tentacleUsb,wateringCan,wineGlass];

console.log(Items);

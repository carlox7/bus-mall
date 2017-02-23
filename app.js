'use strict';

//Stored random numbers
var itemLeft = 0;
var itemCenter = 0;
var itemRight = 0;
console.log(itemLeft);
console.log(itemCenter);
console.log(itemRight);

//click variables
var totalClicks = 0;
var clickLimit = 25;
var itemsCurrentlyShowing = [];

//chart element node
var resultsEl = document.getElementById('chart');

//Catalog constructor
function CatalogItem (filePath, properties){
  this.filePath = filePath;
  this.properties = properties;
  this.timesShown = 0;
  this.timesClicked = 0;

};

//Item List
var rTwoBag = new CatalogItem('img/bag.jpg', 'R2D2 Bag');
var bananaCutter = new CatalogItem('img/banana.jpg','Banana Slicer');
var bathroomStand = new CatalogItem('img/bathroom.jpg','iPad Bathroom Stand');
var rainBoots = new CatalogItem('img/boots.jpg','Toeless Rain Boots ');
var breakfastMaker = new CatalogItem('img/breakfast.jpg','All in One Breakfast');
var meatGum = new CatalogItem('img/bubblegum.jpg','Meatball Bubblegum');
var chairHump = new CatalogItem('img/chair.jpg','Camel Chair');
var cthulhuToy = new CatalogItem('img/cthulhu.jpg','Cthulhu Action Figure');
var dogDuck = new CatalogItem('img/dog-duck.jpg','Dog Duck Beak');
var dragonCan = new CatalogItem('img/dragon.jpg','Dragon Meat');
var penCap = new CatalogItem('img/pen.jpg','Utinsil Pen Caps');
var petSweep = new CatalogItem('img/pet-sweep.jpg','Pet Sweep Footies');
var pizzaCutter = new CatalogItem('img/scissors.jpg','Pizza Scissors');
var sharkBag = new CatalogItem('img/shark.jpg','Shark Sleeping Bag');
var babySweep = new CatalogItem('img/sweep.png','Sweeper Onsie');
var tauntaunBag = new CatalogItem('img/tauntaun.jpg','Tauntaun Bag');
var unicornCan = new CatalogItem('img/unicorn.jpg','Unicorn Meat');
var tentacleUsb = new CatalogItem('img/usb.gif','Tentacle USB');
var wateringCan = new CatalogItem('img/water-can.jpg','Self Watering Can');
var wineGlass = new CatalogItem('img/wine-glass.jpg','Wine Glass Dome');

//Item Array
var items = [rTwoBag,bananaCutter,bathroomStand,rainBoots,breakfastMaker,meatGum,chairHump,cthulhuToy,dogDuck,dragonCan,penCap,petSweep,pizzaCutter,sharkBag,babySweep,tauntaunBag,unicornCan,tentacleUsb,wateringCan,wineGlass];
console.log(items);

//parses local storage clicks into items array
if (localStorage.items){
  var existingData = JSON.parse(localStorage.items);
  for(var r = 0; r < existingData.length; r++){
    items[r].timesClicked += existingData[r].timesClicked;
    items[r].timesShown += existingData[r].timesShown;
  }
};

//Random number generator
function randomPick(){
  return Math.floor(Math.random() * items.length);
};

//set random numbers to item variables
function drawThree(){
  itemLeft = randomPick();
  itemCenter = randomPick();
  itemRight = randomPick();

  //Array for random three picks
  var randomThreePicks = [];
  randomThreePicks.push(itemLeft);
  randomThreePicks.push(itemCenter);
  randomThreePicks.push(itemRight);
  console.log(randomThreePicks);

  //prevents repeating items per turn
  while (randomThreePicks.includes(itemLeft)){
    itemLeft = randomPick();
  };
  while (itemCenter === itemLeft || randomThreePicks.includes(itemCenter)){
    itemCenter = randomPick();
  };
  while (itemRight === itemLeft || itemRight === itemCenter || randomThreePicks.includes(itemRight)){
    itemRight = randomPick();
  }
  //calling functions
  drawCenterItem(items[itemCenter]);
  drawLeftItem(items[itemLeft]);
  drawRightItem(items[itemRight]);
};

//Creates image nodes
function drawLeftItem(itemToDraw){
  var imageLeft = document.createElement('img');
  var formLeft = document.getElementById('left');
  formLeft.innerHTML = '';
  formLeft.appendChild(imageLeft);
  imageLeft.src = itemToDraw.filePath;
  items[itemLeft].timesShown ++;
  formLeft.addEventListener('click', handleClick);
};

function drawCenterItem(itemToDraw){
  var imageCenter = document.createElement('img');
  var formCenter = document.getElementById('center');
  formCenter.innerHTML = '';
  formCenter.appendChild(imageCenter);
  imageCenter.src = itemToDraw.filePath;
  items[itemCenter].timesShown ++;
  formCenter.addEventListener('click', handleClick);
};

function drawRightItem(itemToDraw){
  var imageRight = document.createElement('img');
  var formRight = document.getElementById('right');
  formRight.innerHTML = '';
  formRight.appendChild(imageRight);
  imageRight.src = itemToDraw.filePath;
  items[itemRight].timesShown ++;
  formRight.addEventListener('click', handleClick);
};

console.log(itemCenter);
console.log(itemLeft);
console.log(itemRight);
console.log(items[itemCenter]);
console.log(items[itemLeft]);
console.log(items[itemRight]);

// calls function for random numbers
drawThree();

//saves items array to local storage
function saveProductsToLocalStorage(items){
  localStorage.items = JSON.stringify(items);
  console.log('Saved to local Storage!');
};

//push click data into array
function allItemClicks(products){
  var itemClicks = [];
  for (var x = 0; x < products.length; x++) {
    itemClicks.push(products[x].timesClicked);
  }
  console.log(itemClicks);
  return itemClicks;
}

//push name data into array
function allProductsNames(products){
  var productNames = [];
  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].properties);
  }
  console.log(productNames);
  return productNames;
};

var nameData = allProductsNames(items);
console.log(allProductsNames);

//stores clicks to clickData array
var clickData = [];
function handleClick(event){
  totalClicks ++;
  if(totalClicks < clickLimit){
    if(event.target.parentNode.id === 'right'){
      items[itemRight].timesClicked ++;
      drawThree();
      console.log(items);
      //calls function to add clicks to items array
      clickData = allItemClicks(items);
      console.log(clickData);
      console.log(items[itemRight].timesClicked);
    } else if(event.target.parentNode.id === 'left'){
      items[itemLeft].timesClicked ++;
      drawThree();
      clickData = allItemClicks(items);
      console.log(items[itemLeft].timesClicked);
    } else if(event.target.parentNode.id === 'center'){
      items[itemCenter].timesClicked ++;
      drawThree();
      clickData = allItemClicks(items);
      console.log(items[itemCenter].timesClicked);
    }
  }else {
    saveProductsToLocalStorage(items);
    var ctx = document.getElementById('chart').getContext('2d');

    var data = [];
    var labels = [];
    var labelColors = ['blue','red','orange','purple','green','yellow','salmon','lightblue','pink','black','blue','red','orange','purple','green','yellow','salmon','lightblue','pink','black'];
    for(var i = 0; i < items.length; i++){
      data.push(items[i].timesClicked);
      labels.push(items[i].properties);
    }
    console.log(clickData);
    var chartData = {
      type: 'bar',
      data: {
        labels: nameData,
        datasets: [{
          label: '# of Votes / Color',
          data: clickData,
          backgroundColor: labelColors
        }],
      },
      options: {
        scales: {
          yAxes:[{
            ticks: {
              fontColor: 'white',
              fontSize: 14,
              stepSize: 1,
              beginAtZero:true
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white',
              fontSize: 14,
              stepSize: 1,
              beginAtZero:true
            }
          }]
        }
      }
    };

    var myChart = new Chart(ctx, chartData);

  }

};

'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var theTable = document.getElementById('CookieStores');
var cookieStandForm = document.getElementById('cookie-stand-form');
var allStores = [];

function Store(storeLocation, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalSales = 0;
  this.calcCookiesPerHour();
  // this.render();
  allStores.push(this);
}

Store.prototype.calcCustomersThisHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var numCustomersPerHour = Math.ceil(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour - 1)) + this.minCustomersPerHour;
    this.customersEachHour.push(numCustomersPerHour);
  }
  return this.customersEachHour;
};

Store.prototype.calcCookiesPerHour = function() {
  this.calcCustomersThisHour();
  for (var j = 0; j < hours.length; j++) {
    var avgCookiesPerHour = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(avgCookiesPerHour);
    this.totalSales += avgCookiesPerHour;
  }
  return this.cookiesEachHour;
};

for (var l = 0; l < this.allStores.length; l++) {
  allStores[l].calcCookiesPerHour();
}

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  makeElement('td', this.storeLocation, trEl);
  for (var a = 0; a < hours.length; a++) {
    makeElement('td', this.cookiesEachHour[a], trEl);
  }
  makeElement('td', this.totalSales, trEl);
  theTable.appendChild(trEl);
};

new Store('Pike Place Market', 23, 65, 6.3);
new Store('Alki', 2, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Sea Tac', 3, 24, 1.2);

function myHeader() {
  var trEl = document.createElement('tr');
  makeElement('th', 'Location', trEl);
  for (var c = 0; c < hours.length; c++) {
    makeElement('th', hours[c], trEl);
  }
  makeElement('th', 'Total', trEl);
  theTable.appendChild(trEl);
}
function handleStoreForm(event) {
  event.preventDefault();
  var theStoreLocations = event.target.theStoreLocations.value;
  var yourMinCustomersEachHour = parseInt(event.target.yourMinCustomersEachHour.value);
  var yourMaxCustomersEachHour = parseInt(event.target.yourMaxCustomersEachHour.value);
  var yourAvgCookiesPerHour = parseFloat(event.target.yourAvgCookiesPerHour.value);
  //need the overwrite function
  if(!theStoreLocations || !yourMinCustomersEachHour || !yourMaxCustomersEachHour || !yourAvgCookiesPerHour) {
    return alert('All fields must have a value!');
  };
  var newStore = new Store(theStoreLocations, yourMinCustomersEachHour, yourMaxCustomersEachHour, yourAvgCookiesPerHour);
  event.target.theStoreLocations.value = null;
  event.target.yourMinCustomersEachHour.value = null;
  event.target.yourMaxCustomersEachHour.value = null;
  event.target.yourAvgCookiesPerHour.value = null;
  renderTable();
}

function makeElement(type, content, parent) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  makeElement('th', 'Hourly Totals for All', trEl);

  var totalOfTotals = 0;
  var hourlyTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesEachHour[i];
      totalOfTotals += allStores[j].cookiesEachHour[i];
    }
    makeElement('th', hourlyTotal, trEl);
  }
  makeElement('th', totalOfTotals, trEl);
  theTable.appendChild(trEl);
}

function renderTable() {
  theTable.innerHTML = '';
  myHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  makeFooterRow();
}

renderTable();

cookieStandForm.addEventListener('submit', handleStoreForm);

'use strict';
//
var hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var theTable = document.getElementById('CookieStores');

function Store(storeLocation, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalSales = 0;
  allStores.push(this);
};

Store.prototype.calcCustomersThisHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var numCustomersPerHour = Math.ceil(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    this.customersEachHour.push(numCustomersPerHour);
  }
  return this.customersEachHour;
};

Store.prototype.calcCookiesPerHour = function () {
  this.calcCustomersThisHour();
  for (var j = 0; j < hours.length; j++) {
    var avgCookiesPerHour = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(avgCookiesPerHour);
    this.totalSales += avgCookiesPerHour;
  }
  return this.cookiesEachHour;
};

new Store('Pike Place Market', 23, 65, 6.3);
new Store('Alki', 2, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Seattle Tacoma International Airport', 3, 24, 1.2);

for(var l = 0; l < allStores.length; l++) {
  allStores[l].calcCookiesPerHour();
}
// tdEl = document.createElement = ('td');
// trEl.textContent = this.customersEachHour;
// trEl.appendChild(tdEl);

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  trEl.textContent = this.storeLocation;
  for( var a = 0; a < hours.length; a++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[a];
    trEl.appendChild(tdEl);
  }
  // theTable.appendChild(trEl);
  theTable.appendChild(trEl);
};
myHeader();
for(var b = 0; b < allStores.length; b++) {
  allStores[b].render();
}

function myHeader() {
  var trEl = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Location';
  trEl.appendChild(thEL);
  for (var c = 0; c < hours.length; c++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[c];
    trEl.appendChild(thEl);
  }

  theTable.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
}

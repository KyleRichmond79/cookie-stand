'use strict';

var hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlaceMkt = {
  location: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  //render: function() {},
  calcCustomersThisHour: function(min, max) {
//    var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1))
//    + this.minCustomersPerHour;
    for (var i = 0; i < hours.length; i++) {
      var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numCustomersPerHour);
    }
    return numCustomersPerHour;
  },
  cookiesPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }

  },
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var f = 0; f < hours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl);
    }
  }
};

pikePlaceMkt.calcCustomersThisHour();
pikePlaceMkt.cookiesPerHour();
pikePlaceMkt.render();

var alki = {
  location: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  //render: function() {},
  calcCustomersThisHour: function(min, max) {
//    var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1))
//    + this.minCustomersPerHour;
    for (var i = 0; i < hours.length; i++) {
      var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numCustomersPerHour);
    }
    return numCustomersPerHour;
  },
  cookiesPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }

  },
  render: function() {
    var ulEl = document.getElementById('locationName2');
    ulEl.textContent = this.location;
    for (var f = 0; f < hours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl);
    }
  }
};

alki.calcCustomersThisHour();
alki.cookiesPerHour();
alki.render();

var capHill = {
  location: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  //render: function() {},
  calcCustomersThisHour: function(min, max) {
//    var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1))
//    + this.minCustomersPerHour;
    for (var i = 0; i < hours.length; i++) {
      var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numCustomersPerHour);
    }
    return numCustomersPerHour;
  },
  cookiesPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }

  },
  render: function() {
    var ulEl = document.getElementById('locationName3');
    ulEl.textContent = this.location;
    for (var f = 0; f < hours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl);
    }
  }
};

capHill.calcCustomersThisHour();
capHill.cookiesPerHour();
capHill.render();

var seaCenter = {
  location: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  //render: function() {},
  calcCustomersThisHour: function(min, max) {
    for (var i = 0; i < hours.length; i++) {
      var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numCustomersPerHour);
    }
    return numCustomersPerHour;
  },
  cookiesPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }

  },
  render: function() {
    var ulEl = document.getElementById('locationName4');
    ulEl.textContent = this.location;
    for (var f = 0; f < hours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl);
    }
  }
};

seaCenter.calcCustomersThisHour();
seaCenter.cookiesPerHour();
seaCenter.render();

var seaTac = {
  location: 'SeaTac Airtport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  //render: function() {},
  calcCustomersThisHour: function(min, max) {
//    var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1))
//    + this.minCustomersPerHour;
    for (var i = 0; i < hours.length; i++) {
      var numCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numCustomersPerHour);
    }
    return numCustomersPerHour;
  },
  cookiesPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }

  },
  render: function() {
    var ulEl = document.getElementById('locationName5');
    ulEl.textContent = this.location;
    for (var f = 0; f < hours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl);
    }
  }
};

seaTac.calcCustomersThisHour();
seaTac.cookiesPerHour();
seaTac.render();

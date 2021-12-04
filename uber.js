class CarService {
  constructor(pricePerKm, expectedNoOfKms, actualNoOfKms) {
    (this.pricePerKm = pricePerKm),
      (this.expectedNoOfKms = expectedNoOfKms),
      (this.actualNoOfKms = actualNoOfKms);
  }
  calculateExpectedPrice() {
    return this.pricePerKm * this.expectedNoOfKms;
  }
  calculateActualPrice(actualKms) {
    return this.pricePerKm * actualKms;
  }
}

const uberService = new CarService(15, 15);
console.log("Total Expected price", uberService.calculateExpectedPrice());
console.log("Total Actual price", uberService.calculateActualPrice(16));

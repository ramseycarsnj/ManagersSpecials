$(document).ready(function(){

  const vehicleArray = [];

  function Vehicle(
     bodyStyle,
     year,
     make,
     model,
     color,
     doors,
     engine,
     transmission,
     brakes,
     steering,
     power,
     equipment,
     vin,
     stock,
     miles,
     msrp,
     leasePrice,
     residual,
     security,
     bankFee,
     moneyDown,
     totalPayment,
     months,
     milesPerYear,
     thereAfter,
     totalAtInception,
     additionalInfo,
     vehicleImage,
     vehicleUrl,
     buyItNow
    ){
      this.bodyStyle = bodyStyle;
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.doors = doors;
      this.engine = engine;
      this.transmission = transmission;
      this.brakes = brakes;
      this.steering = steering;
      this.power = power;
      this.equipment = equipment;
      this.vin = vin;
      this.stock = stock;
      this.miles = miles;
      this.msrp = msrp;
      this.leasePrice = leasePrice;
      this.residual = residual;
      this.security = security;
      this.bankFee = bankFee;
      this.moneyDown = moneyDown;
      this.totalPayment = totalPayment;
      this.months = months;
      this.milesPerYear = milesPerYear;
      this.thereAfter = thereAfter;
      this.totalAtInception = totalAtInception;
      this.additionalInfo = additionalInfo;
      this.vehicleImage = vehicleImage;
      this.vehicleUrl = vehicleUrl;
      this.buyItNow = buyItNow;
  }

vehicleArray[0] = new Vehicle(
  'sedan',
  '2017',
  'Subaru',
  'Impreza',
  'Cbs',
  '4',
  '2.0i I-4',
  '8-Speed',
  'Power Brakes',
  'power steering',
  'power everythan',
  'Stuff',
  'H1234068',
  'SUH1234',
  '1',
  '12,345',
  '123',
  '12,345',
  '400',
  '0',
  '2,000',
  '11,234',
  '12',
  '10,000',
  '.25',
  '3,000',
  '',
  'http://st.motortrend.com/uploads/sites/10/2017/03/2017-Subaru-Impreza-Sport-hatchback-front-three-quarter-02.jpg',
  'vehicleUrl',
  'buyItNow'
)

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});

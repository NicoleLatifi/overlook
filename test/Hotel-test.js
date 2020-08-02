import { expect } from 'chai'
import Hotel from '../src/Hotel';

describe('Hotel', function() {
  let booking1, booking2, booking3;
  let bookingsData;
  let room1, room2, room3;
  let roomsData;
  
  beforeEach(() => {
    booking1 = {
      "id": "5fwrgu4i7k55hl7ar",
      "userID": 1,
      "date": "2020/02/10",
      "roomNumber": 1,
      "roomServiceCharges": []
      };
    booking2 = {
      "id": "5fwrgu4i7k55hl7cy",
      "userID": 2,
      "date": "2020/02/10",
      "roomNumber": 2,
      "roomServiceCharges": []
      };
    booking3 = {
      "id": "5fwrgu4i7k55hl7ds",
      "userID": 3,
      "date": "2020/02/11",
      "roomNumber": 3,
      "roomServiceCharges": []
      };
    bookingsData = [booking1, booking2, booking3];
    room1 = {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
      };
    room2 = {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
      };
    room3 = {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
      };
    roomsData = [room1, room2, room3];
  });


  it('Should be instantiated with bookings and rooms', function() {
    const hotel = new Hotel();

    expect(hotel).to.be.an.instanceof(Hotel);
  })

  // it('Should calculate number of rooms available today', function() {
  //   const hotel = new Hotel();

  //   expect(hotel).to.be.an.instanceof(Hotel);
  // })

  // it('Should calculate today\'s total revenue', function() {
  //   const hotel = new Hotel();

  //   expect(hotel).to.be.an.instanceof(Hotel);
  // })

  // it('Should calculate today\s occupancy rate', function() {
  //   const hotel = new Hotel();

  //   expect(hotel).to.be.an.instanceof(Hotel);
  // })
})
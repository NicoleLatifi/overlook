import { expect } from 'chai'
import Hotel from '../src/Hotel';

describe('Hotel', function() {
  let booking1, booking2, booking3;
  let bookingsData;
  let room1, room2, room3;
  let roomsData;
  let dateToday = "2020/02/10";
  let hotel;
  
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
    hotel = new Hotel(bookingsData, roomsData, dateToday);
  });

  it('Should be instantiated with bookings and rooms', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  })

  it('Should calculate number of rooms available today', function() {
    let numRoomsAvailableToday = hotel.getNumRoomsAvailableToday();

    expect(numRoomsAvailableToday).to.equal(1);
  })

  it('Should calculate today\'s revenue', function() {
    let revenueToday = hotel.getRevenueToday();

    expect(revenueToday).to.equal(835);
  })

  it('Should calculate today\s occupancy rate', function() {
    let occupancyRateToday = hotel.getOccupancyRateToday();

    expect(occupancyRateToday).to.equal(67);
  })
})
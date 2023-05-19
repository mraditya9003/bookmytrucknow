import React from 'react';

function BookingForm() {
  return (
    <section id="booking-form">
      <h2>Book a Truck</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <select>
          <option value="">Select Truck</option>
          <option value="truck1">Truck 1</option>
          <option value="truck2">Truck 2</option>
        </select>
        <button>Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;

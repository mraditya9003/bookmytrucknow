import React from 'react';

function TruckListings() {
  return (
    <section id="truck-listings">
      <div className="truck-listing">
        <img src="truck1.jpg" alt="Truck" />
        <div className="truck-info">
          <h3>Truck 1</h3>
          <p>Capacity: 20 tons</p>
          <p>Location: City A</p>
        </div>
      </div>
      <div className="truck-listing">
        <img src="truck2.jpg" alt="Truck" />
        <div className="truck-info">
          <h3>Truck 2</h3>
          <p>Capacity: 15 tons</p>
          <p>Location: City B</p>
        </div>
      </div>
    </section>
  );
}

export default TruckListings;

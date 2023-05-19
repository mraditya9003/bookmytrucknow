import React from 'react';

function SearchForm() {
  return (
    <section id="search">
      <form>
        <input type="text" placeholder="Source" />
        <input type="text" placeholder="Destination" />
        <select>
          <option value="">Truck Type</option>
          <option value="pickup">Pickup</option>
          <option value="trailer">Trailer</option>
          <option value="container">Container</option>
        </select>
        <button>Search</button>
      </form>
    </section>
  );
}

export default SearchForm;

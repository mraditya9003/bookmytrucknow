import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import TruckListings from './components/TruckListings';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SearchForm />
        <TruckListings />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

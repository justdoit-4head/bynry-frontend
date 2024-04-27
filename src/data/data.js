// data that should be fetched from backend and passed through geocoding webbox api
// everything to be done at backend for maximum efficiency 
// less processing at frontend to keep the app as fast as possible

const locations = [
    { lat: 18.4919768, lng: 73.7924504, name: "Sebastian fors", address:{
      apartMent: "Garden City", location:"Warje", cityPincode: "Pune, 411058", stateCountry: "Maharashtra, India"
    } },
    { lat: 28.68009085, lng: 77.225400004994, name: "Jon doe", address:{
      apartMent: "Indraprastha College for Women, Sham Nath Marg", location:"Civil Lines Tehsil", cityPincode: "Delhi, 110054", stateCountry: "New Delhi, India"
    } },
    { lat: 12.9821279, lng: 77.5982064, name:"Rick Morty", address:{
      apartMent: "Gem Plz Ifty Road", location:"Infantry Road", cityPincode: "Bangalore, 560001", stateCountry: "Karnataka, India"
    } },
  ];


export default locations  
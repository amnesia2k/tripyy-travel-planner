import GooglePlacesAutocomplete from "react-google-places-autocomplete";


const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-3xl">
      <h3>Where is your next destination?</h3>
      <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} />
    </div>
  );
};

export default App;

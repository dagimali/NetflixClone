/** @format */

import "./App.css";
import "./common/bootstrap.css";
import Row from "./components/Row";
import requests from "./API-Data/requests";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
// import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} islarge_row />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovie} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;

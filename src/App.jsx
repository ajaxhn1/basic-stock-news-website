// stock data //
import Ticker from "./Ticker";

const stockData = [
  {
    name: "Coal India",
    sector: "Power and Minning",
    price: 298,
    photoName: "images/Bharatpetroleum.jpg",
    trending: false,
  },
  {
    name: "Bajaj Finance",
    sector: "Finance",
    price: 3000,
    photoName: "public/images/BajajFinance.jpg",
    trending: false,
  },
  {
    name: "BPCLL",
    sector: "oil and petroleum",
    price: 356,
    photoName: import.meta.env.BASE_URL + "images/Bharatpetroleum.jpg",
    trending: false,
  },
  {
    name: "HDFC Bank",
    sector: "Banking and Finance",
    price: 1500,
    photoName: import.meta.env.BASE_URL + "public/images/hdfcbank.jpg",
    trending: false,
  },
  {
    name: "Reliance",
    sector: "Electricity",
    price: 2987,
    photoName: import.meta.env.BASE_URL + "images/reliance.jpg",
    trending: false,
  },
  {
    name: "Vedanta",
    sector: "Power and Minning",
    price: 405,
    photoName: import.meta.env.BASE_URL + "images/vedanta.jpg",
    trending: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Ticker />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Trending stock news</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2> Hot stocks </h2>
      <ul className="pizzas">
        {stockData.map((stock) => (
          <Stock stockObj={stock} key={stock.name} />
        ))}
      </ul>

      {/* <Stock
        name="Coal India"
        sector="Power and mining"
        photoName="/public/images/hdfcbank.jpg"
        price="200"
      />
      <Stock
        name="Bajaj Finance"
        sector="Finance"
        photoName="/public/images/BajajFinance.jpg"
        price="3000"
      /> */}
    </main>
  );
}
function Stock(props) {
  return (
    <li className="pizza">
      <img src={props.stockObj.photoName} alt={props.stockObj.name} />
      <div>
        <h3>{props.stockObj.name}</h3>
        <p>{props.stockObj.sector}</p>
        <span>{props.stockObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} The market is trending{" "}
    </footer>
  );
}

export default App;

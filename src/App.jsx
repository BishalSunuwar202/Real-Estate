import "./sass/style.scss";
import MainNavigation from "./components/MainNavigation";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div className="house1">
        <MainNavigation />
        <Search />
      </div>
    </>
  );
}

export default App;

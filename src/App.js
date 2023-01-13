import Header from "./components/Header";
import First from "./components/First";
import Middle from "./components/Middle";
// import Last from "./components/Last";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <First />
        <Middle />
        {/* <Last /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;

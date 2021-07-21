import Header from "./components/header";
import "./app.scss";
import HeadLine from "./components/headline";
function App() {
  return (
    <>
      <Header />
      <section className="main">
        <HeadLine header="Posts" desc="Click the button to render posts" />
      </section>
    </>
  );
}

export default App;

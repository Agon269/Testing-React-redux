import Header from "./components/header";
import "./app.scss";
import HeadLine from "./components/headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "23e213@ds.com",
    age: 24,
    onlineStatus: true,
  },
];
function App() {
  return (
    <>
      <Header />
      <section className="main">
        <HeadLine
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </>
  );
}

export default App;

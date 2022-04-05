import NavBar from "./components/navbar/NavBar";
import Homepage from "./pages/homepage/Homepage";




function App() {
  const currentUser = true;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
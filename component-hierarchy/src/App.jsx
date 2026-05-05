import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  const appTitle = "Component Hierarchy Demo";

  return (
    <div>
      <Header title={appTitle} />

      <ProfileCard
        name="Belva"
        role="Frontend Developer"
      />

      <ProfileCard
        name="Calista"
        role="Backend Developer"
      />

      <Footer text="React Component Hierarchy Lab" />
    </div>
  );
}

export default App;
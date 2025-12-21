import gsap from "gsap";
import Draggable from "gsap/Draggable";

import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from "#components/Dock";
import Terminal from "#windows/Terminal";
import SafariWrapped from "#windows/Safari";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <SafariWrapped />
    </main>
  );
};

export default App;

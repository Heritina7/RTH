import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Portfolio from "./Pages/Portfolio";
import Propos from "./Pages/Propos";
import Contact from "./Pages/Contact";
import Devis from "./Pages/devis";
import Contrat from "./Pages/contrat";
import Catalogue from "./Pages/Catalogue";
function App() {
  return (
    
    <Router>
      
      <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Services/" element={<Services/>}/>
          <Route path="Shop/" element={<Shop/>}/>
          <Route path="Portfolio/" element={<Portfolio/>}/>
          <Route path="Propos/" element={<Propos/>}/>
          <Route path="Contact/" element={<Contact/>}/>
          <Route path="Devis/" element={<Devis/>}/>
          <Route path="Contrat/" element={<Contrat/>}/>
          <Route path="Catalogue/" element={<Catalogue/>}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;

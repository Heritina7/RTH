import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Portfolio from "./Pages/Portfolio";
import Propos from "./Pages/Propos";
import Contact from "./Pages/Contact";
import Devis from "./Pages/Devis";
import Contrat from "./Pages/Contrat";
import Catalogue from "./Pages/Catalogue";
function App() {
  return (
    
    <Router>
      
      <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="services/" element={<Services/>}/>
          <Route path="shop/" element={<Shop/>}/>
          <Route path="portfolio/" element={<Portfolio/>}/>
          <Route path="propos/" element={<Propos/>}/>
          <Route path="contact/" element={<Contact/>}/>
          <Route path="devis/" element={<Devis/>}/>
          <Route path="contrat/" element={<Contrat/>}/>
          <Route path="catalogue/" element={<Catalogue/>}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;

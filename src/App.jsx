import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import { useState } from 'react';

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const selectedSats = satData.filter((newSatDisplay) =>{
      return newSatDisplay.orbitType === currentType;
    });
    setSat(selectedSats);
  }
  return (
    <div>
      <Banner />
      <Buttons 
      // props for our Buttons, Table components
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
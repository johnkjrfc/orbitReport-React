import satData from "./satData";
import "./styling.css"
//Will ultimately render 4 buttons
const Buttons = ({ filterByType, setSat, displaySats }) => {

  return (
    <>
      {displaySats.map((sat, id) => (
        <div key={id}>
          <button onClick={() => filterByType(sat)}>
            {sat} Orbit
          </button>
        </div>
      ))}
      <div>
        <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
    </>
  );
};


export default Buttons;
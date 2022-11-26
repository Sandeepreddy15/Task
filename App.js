import Folder from "./component/Folder";
import explorer from "./Data/folderData.js";
import { useState } from "react"
function App() {
  const [isShown, setIsShown] = useState(false);
  const [item, setItem] = useState("")
  const [drop, setDrop] = useState("")
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleSave = () => {
    setIsShown(current => !current);
  }
  const handleCancel = () => {
    setIsShown(current => !current);
  }

  const itemname = e => {
    setItem(e.target.value)
  }

  const dropDownSelect = e => {
    setDrop(e.target.value)
  }

  // web storage
  localStorage.setItem("Input Item",item)
  localStorage.setItem("dropdown",drop)
  
  return (
    <div>
    
      <button onClick={handleClick}>Add Item</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div style={{
         
          paddingTop : "10px",
          paddingLeft : "10px",
          textAlign: "center"
        }}>
           <label> Item name :</label>
            <input type="text" onChange={itemname}/><br/>
            <div className="dropdown" style={{
              paddingTop : "4px"
            }}>
          <label>Parent:</label>

          <select id="dropdown" onChange={dropDownSelect} value={drop}>
          <option value="Bevarages">Bevarages</option>
            <option value="water">water</option>
            <option value="coffee">coffee</option>
            <option value="Tea">Tea</option>
          </select>
          </div>
          <div className="buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
      <Folder explorer={explorer} />
      {item}<br/>
      {drop}
    </div>
  );
}

function Box() {
  return (
    <div>
      
    </div>
  );
}

export default App;

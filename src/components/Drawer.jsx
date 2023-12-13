import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Drawer = ({ open, setOpen }) => {
  useEffect(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <>
    <div className={`overlay ${open && "active"}`} onClick={() => setOpen(false)} ></div>
    <div className={`drawer ${open && "active"}`}>
        <div className="searchComp">
      <div className="searchInp">
      <FiSearch className="icon"/>
          <span className="p-input-icon-left">
            <InputText placeholder="What are you looking for?" />
          </span>
      </div>
          <IoMdClose className="icon close" onClick={() => setOpen(false)} />
        </div>
    
    </div>
    </>
  );
};

export default Drawer;

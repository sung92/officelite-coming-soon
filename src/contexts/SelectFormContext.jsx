import { createContext, useContext, useReducer } from "react";
const SelectFormContext = createContext();

const initialState = {
  pack: "Basic",
  price: "Free",
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "basic":
      return { ...state, pack: "Basic", price: "Free", isOpen: false };
    case "pro":
      return { ...state, pack: "Pro", price: "9.99", isOpen: false };
    case "ultimate":
      return { ...state, pack: "Ultimate", price: "19.99", isOpen: false };
    case "selectClose":
      return { ...state, isOpen: false };
    case "selectOpen":
      return { ...state, isOpen: true };

    default:
      throw new Error("Action unkonwn");
  }
}

function SelectFormProvider({ children }) {
  const [{ pack, price, isOpen }, dispatch] = useReducer(reducer, initialState);

  //   const removeSelectModal = () => {
  //     dispatch({ type: "selectClose" });
  //   };

  //   useEffect(() => {
  //     if (isOpen === true) {
  //       window.addEventListener("click", removeSelectModal);
  //     }
  //     return () => window.removeEventListener("click", removeSelectModal);
  //   }, [isOpen]);

  return (
    <SelectFormContext.Provider value={{ pack, price, isOpen, dispatch }}>
      {children}
    </SelectFormContext.Provider>
  );
}

function useSelectForm() {
  const context = useContext(SelectFormContext);
  if (context === undefined)
    throw new Error(
      "SelectFormContext was used outside of the SelectFormProvider",
    );
  return context;
}

export { SelectFormProvider, useSelectForm };

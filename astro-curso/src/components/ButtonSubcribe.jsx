import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Button() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <>
      <button onClick={() => {

        toast.success("Felicidades, estas suscrito")
        setSubscribe(!subscribe)
      }}>
        {subscribe ? "Ya estas subscrito" : "Suscríbete"}
      </button>
      <ToastContainer />
    </>
  );
}

export default Button;

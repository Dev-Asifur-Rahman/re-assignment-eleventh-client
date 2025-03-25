import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Router";
import { Context } from "./Context/context";
import { Auth } from "./Firebase/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ApiInstance } from "./Context/apiInstance";
import { Toaster } from "react-hot-toast";

function App() {
  const [Loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.email) {
          const token = { email: currentUser.email };
          ApiInstance.post("/jwt", token, { withCredentials: true })
            .then((res) => {
              setLoading(false);
            })
            .catch((error) => {
              console.log("error occured");
              setLoading(false);
            });
        }
      } else {
        setUser(null);
        ApiInstance.post("/jwtout", {}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("error occurred");
            setLoading(false);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  const contextProvider = {
    Auth,
    Loading,
    user,
    setLoading,
  };
  
  return (
    <>
      <Context.Provider value={contextProvider}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </Context.Provider>
    </>
  );
}

export default App;

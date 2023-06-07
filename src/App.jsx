import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }, []);
  return (
    <>
      {
        isLoading && <Loader/>
      }
    </>
  );
}

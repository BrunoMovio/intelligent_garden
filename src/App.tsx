import { Grid, Heading } from "@chakra-ui/react";
import Banner from "./modules/banner/banner";
import GardenDetails from "./modules/graden-details";
import { useEffect, useState } from "react";
import axios from "./api/axios";
import Header from "./modules/header";
import useCreateGardenDetails from "./modules/mock/create-garden-details.uc";

interface User {
  name: string;
  plants: string[];
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { create } = useCreateGardenDetails();

  useEffect(() => {
    async function getUser() {
      const result = await axios.get("/user", {
        headers: { "Content-Type": "application/json" },
      });

      if (!result) {
        setError("Usuário não encontrado.");
        return;
      }

      setError(null);
      setUser(result.data);
    }

    getUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("chamou");
      create();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="1fr 1fr 3fr"
      gap={8}
      p={8}
      w="97vw"
      h="98vh"
    >
      {error || !user ? (
        <Heading>{error}</Heading>
      ) : (
        <>
          <Header name={user.name} />
          <Banner />
          <GardenDetails plantName={"plant1"} />
          <GardenDetails plantName={"plant2"} />
        </>
      )}
    </Grid>
  );
}

export default App;

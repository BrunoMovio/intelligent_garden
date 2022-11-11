import { Grid } from "@chakra-ui/react";
import Logo from "./modules/header/logo";
import Profile from "./modules/header/profile";
import "@aws-amplify/ui/dist/style.css";
import Banner from "./modules/banner/banner";
import GardenDetails from "./modules/graden-details";
import { plant1, plant2 } from "./contants";

function App() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="1fr 1fr 3fr"
      gap={8}
      p={8}
      w="99vw"
      h="98vh"
    >
      <Logo />
      <Profile />
      <Banner />
      <GardenDetails
        name={plant1.name}
        history={plant1.history}
        curTemp={plant1.curTemp}
        curMois={plant1.curMois}
      />
      <GardenDetails
        name={plant2.name}
        history={plant2.history}
        curTemp={plant2.curTemp}
        curMois={plant2.curMois}
      />
    </Grid>
  );
}

export default App;

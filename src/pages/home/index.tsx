import { FC } from "react";
import {
  Grid,
  makeStyles
} from "@material-ui/core";
import Header from "./Header";
import InputPanel from "./InputPanel";
import VisualizerPanel from "./VisualizerPanel";
import SideMenu from "./SideMenu";
import ResultPanel from "./ResultPanel";
import NetworkPanel from "./NetworkPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  }
}))

const Home: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root}>
        <Header />
        <Grid container>
          <SideMenu />
          <InputPanel />
          <Grid>
            <VisualizerPanel />
            <NetworkPanel />
          </Grid>
          <ResultPanel />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;

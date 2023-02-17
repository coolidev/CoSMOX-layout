import { FC, useContext, useEffect } from "react";
import {
  Grid,
  makeStyles
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import Header from "./Header";
import InputPanel from "./InputPanel";
import VisualizerPanel from "./VisualizerPanel";
import SideMenu from "./SideMenu";
import ResultPanel from "./ResultPanel";
import NetworkPanel from "./NetworkPanel";
import { ZoomContext } from "../../providers/zoom";
import useWindowSize from "../../hooks/useSize";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    textAlign: "center",
    width: window.screen.width,
    height: window.screen.height
  },
  panel: {
    height: "90%"
  },
  mainPanel: {
    width: "35%"
  }
}))

const Home: FC = () => {
  const { zoom, selectZoom } = useContext(ZoomContext)
  const classes = useStyles();

  const size = useWindowSize();

  useEffect(() => {
    selectZoom()
  }, [size, selectZoom]);

  return (
    <>
      <Grid
        className={classes.root}
        style={{
          width: window.screen.width / zoom, height:
          window.screen.height / zoom
        }}
      >
        <Header />
        <Grid container className={classes.panel}>
          <SideMenu />
          <InputPanel />
          <Grid className={classes.mainPanel}>
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

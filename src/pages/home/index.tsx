import { FC, useContext, useEffect, useState } from "react";
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
import { PanelContext } from "../../providers/panel";
import { HEADER, INPUT_PANEL, MAIN_PANEL, MINIMUM, PANEL_RATIO, RESULT_PANEL, SIDE_MENU, TAB_MENU } from "../../utils";
import TabMenu from "./TabMenu";
import HomeLayout from "../../layouts/home";

const useStyles = makeStyles<Theme>((theme) => ({
  panel: {
    height: `${100 - PANEL_RATIO[HEADER].height}%`
  },
  mainPanel: {
    width: `${PANEL_RATIO[MAIN_PANEL].width}%`
  }
}))

const Home: FC = () => {
  const { input_panel, result_panel } = useContext(PanelContext)

  const [mainPanelWidth, setMainPanelWidth] = useState(35);

  const classes = useStyles();

  useEffect(() => {
    const newWidth = 100
            - (PANEL_RATIO[SIDE_MENU].width
              + (input_panel !== MINIMUM
                ? PANEL_RATIO[INPUT_PANEL].width
                : PANEL_RATIO[INPUT_PANEL].minimized_width)
              + (result_panel !== MINIMUM
                ? PANEL_RATIO[RESULT_PANEL].width
                : PANEL_RATIO[RESULT_PANEL].minimized_width)
              + PANEL_RATIO[TAB_MENU].width)
    setMainPanelWidth(newWidth)
  }, [input_panel, result_panel])

  return (
    <>
      <HomeLayout>
        <Header />
        <Grid container className={classes.panel}>
          <SideMenu />
          <InputPanel />
          <Grid
            className={classes.mainPanel}
            style={{
              width: `${mainPanelWidth}%`
            }}
          >
            <VisualizerPanel />
            <NetworkPanel />
          </Grid>
          <ResultPanel />
          <TabMenu />
        </Grid>
      </HomeLayout>
    </>
  );
}

export default Home;

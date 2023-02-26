import { FC, useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { MAXIMUM, MINIMUM, PANEL_RATIO, VISUALIZER_PANEL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: '100%',
    height: `${(100) * PANEL_RATIO[VISUALIZER_PANEL].height}%`
  }
}))

const VisualizerPanel: FC = () => {
  const { visualizer_panel } = useContext(PanelContext)
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        height: `${visualizer_panel === MINIMUM ?
          `${(100) * PANEL_RATIO[VISUALIZER_PANEL].minimized_height}%` :
          (visualizer_panel === MAXIMUM ?
            `${(100) * PANEL_RATIO[VISUALIZER_PANEL].maximuzed_height}%` :
            `${(100) * PANEL_RATIO[VISUALIZER_PANEL].height}%`
          )}`
      }}
    >
      VisualizerPanel
    </div>
  )
};

export default VisualizerPanel;

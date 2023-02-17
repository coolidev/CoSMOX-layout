import { FC, useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { MAXIMUM, MINIMUM } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: '100%',
    height: '56%'
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
          '6%' :
          (visualizer_panel === MAXIMUM ?
            '94%' :
            '56%'
          )}`
      }}
    >
      VisualizerPanel
    </div>
  )
};

export default VisualizerPanel;

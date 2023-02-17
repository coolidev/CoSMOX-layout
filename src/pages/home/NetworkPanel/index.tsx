import { FC, useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { MAXIMUM, MINIMUM, NETWORK_PANEL, NORMAL, VISUALIZER_PANEL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '100%',
    height: '44%'
  }
}))

const NetworkPanel: FC = () => {
  const { network_panel, handlePanel } = useContext(PanelContext)
  const classes = useStyles();

  const handleMin = () => {
    if (network_panel === MAXIMUM) {
      handlePanel(NETWORK_PANEL, NORMAL);
      handlePanel(VISUALIZER_PANEL, NORMAL);
    }
    if (network_panel === NORMAL || network_panel === '') {
      handlePanel(NETWORK_PANEL, MINIMUM);
      handlePanel(VISUALIZER_PANEL, MAXIMUM);
    }
  }

  const handlePlus = () => {
    if (network_panel === MINIMUM) {
      handlePanel(NETWORK_PANEL, NORMAL);
      handlePanel(VISUALIZER_PANEL, NORMAL);
    }
    if (network_panel === NORMAL || network_panel === '') {
      handlePanel(NETWORK_PANEL, MAXIMUM);
      handlePanel(VISUALIZER_PANEL, MINIMUM);
    }
  }

  return (
    <div
      className={classes.root}
      style={{
        height: `${network_panel === MINIMUM ?
          '6%' :
          (network_panel === MAXIMUM ?
            '94%' :
            '44%'
          )}`
      }}
    >
      NetworkPanel
      <button onClick={handleMin}>
        minus
      </button>
      <button onClick={handlePlus}>
        plus
      </button>
    </div>
  )
};

export default NetworkPanel;

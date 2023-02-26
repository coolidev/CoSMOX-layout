import { FC, useContext } from "react";
import {
  makeStyles,
  IconButton
} from "@material-ui/core";
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@material-ui/icons';
import { PanelContext } from "../../../providers/panel";
import { MAXIMUM, MINIMUM, NETWORK_PANEL, NORMAL, PANEL_RATIO, VISUALIZER_PANEL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    overflow: "hidden",
    color: 'white',
    width: '100%',
    height: `${(100) * PANEL_RATIO[NETWORK_PANEL].height}%`
  },
  togglePanel: {
    position: 'relative',
    textAlign: 'right',
    height: '0',
    '& > button': {
      color: 'white'
    }
  },
  panel: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
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
          `${(100) * PANEL_RATIO[NETWORK_PANEL].minimized_height}%` :
          (network_panel === MAXIMUM ?
            `${(100) * PANEL_RATIO[NETWORK_PANEL].maximuzed_height}%` :
            `${(100) * PANEL_RATIO[NETWORK_PANEL].height}%`
          )}`
      }}
    >
      <div className={classes.togglePanel}>
        <IconButton onClick={handleMin} size="small">
          {network_panel !== MINIMUM ? (<KeyboardArrowDown />) : (<></>)}
        </IconButton>
        <IconButton onClick={handlePlus} size="small">
          {network_panel !== MAXIMUM ? (<KeyboardArrowUp />) : (<></>)}
        </IconButton>
      </div>
      <div className={classes.panel}>
        NetworkPanel
      </div>
    </div>
  )
};

export default NetworkPanel;

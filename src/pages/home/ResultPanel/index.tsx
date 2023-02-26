import { FC, useContext } from "react";
import {
  makeStyles,
  IconButton
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight
} from '@material-ui/icons';
import { PanelContext } from "../../../providers/panel";
import { MINIMUM, NORMAL, PANEL_RATIO, RESULT_PANEL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    overflow: "hidden",
    color: 'white',
    width: '30%',
    height: '100%'
  },
  togglePanel: {
    position: 'relative',
    textAlign: 'left',
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

const ResultPanel: FC = () => {
  const { result_panel, handlePanel } = useContext(PanelContext)
  const classes = useStyles();

  const handlePanelSize = () => {
    if (result_panel === MINIMUM) {
      handlePanel(RESULT_PANEL, NORMAL);
    } else {
      handlePanel(RESULT_PANEL, MINIMUM)
    }
  }

  return (
    <div
      className={classes.root}
      style={{
        width: `${result_panel === MINIMUM ? PANEL_RATIO[RESULT_PANEL].minimized_width : PANEL_RATIO[RESULT_PANEL].width}%`
      }}
    >
      <div className={classes.togglePanel}>
        <IconButton onClick={handlePanelSize} size="small">
          {result_panel === MINIMUM ? (<ChevronLeft />) : (<ChevronRight />)}
        </IconButton>
      </div>
      <div className={classes.panel}>
        ResultPanel
      </div>
    </div>
  )
};

export default ResultPanel;

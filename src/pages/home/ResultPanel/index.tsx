import { FC, useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { MINIMUM, NORMAL, RESULT_PANEL } from "../../../utils";

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
    height: '6%'
  },
  panel: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: '94%'
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
        width: `${result_panel === MINIMUM ? '5%' : '30%'}`
      }}
    >
      <div className={classes.togglePanel}>
        <button onClick={handlePanelSize}>
          toggle
        </button>
      </div>
      <div className={classes.panel}>
        ResultPanel
      </div>
    </div>
  )
};

export default ResultPanel;

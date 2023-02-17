import { FC, useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { MINIMUM, NORMAL, RESULT_PANEL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '30%',
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
        width: `${result_panel === MINIMUM ? '5%' : '30%'}`
      }}
    >
      ResultPanel
      <button onClick={handlePanelSize}>
        toggle
      </button>
    </div>
  )
};

export default ResultPanel;

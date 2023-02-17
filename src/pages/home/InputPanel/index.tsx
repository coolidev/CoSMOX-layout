import { FC, useContext } from "react";
import {
  makeStyles,
  IconButton,
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight
} from '@material-ui/icons';
import { PanelContext } from "../../../providers/panel";
import { INPUT_PANEL, MINIMUM, NORMAL } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green',
    overflow: "hidden",
    color: 'white',
    width: '30%',
    height: '100%'
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

const InputPanel: FC = () => {
  const { input_panel, handlePanel } = useContext(PanelContext)
  const classes = useStyles();

  const handlePanelSize = () => {
    if (input_panel === MINIMUM) {
      handlePanel(INPUT_PANEL, NORMAL);
    } else {
      handlePanel(INPUT_PANEL, MINIMUM)
    }
  }

  return (
    <div
      className={classes.root}
      style={{
        width: `${input_panel === MINIMUM ? '5%' : '30%'}`
      }}
    >
      <div className={classes.togglePanel}>
        <IconButton onClick={handlePanelSize} size="small">
          {input_panel === MINIMUM ? (<ChevronRight />) : (<ChevronLeft />)}
        </IconButton>
      </div>
      <div className={classes.panel}>
        InputPanel
      </div>
    </div>
  )
};

export default InputPanel;

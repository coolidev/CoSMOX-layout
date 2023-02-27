import { ReactNode, useContext, useEffect } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PanelContext } from "../../../providers/panel";
import { INPUT_PANEL, MINIMUM, NORMAL, PANEL_RATIO } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green',
    overflow: "hidden",
    color: 'white',
    width: `${PANEL_RATIO[INPUT_PANEL].width}%`,
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

interface InputPanelProps {
  currentTab: string;
  children?: ReactNode;
}

const InputPanel = ({ currentTab, children }: InputPanelProps) => {
  const { input_panel, handlePanel } = useContext(PanelContext);
  const classes = useStyles();

  useEffect(() => {
    if (currentTab !== '') {
      handlePanel(INPUT_PANEL, NORMAL);
    } else {
      handlePanel(INPUT_PANEL, MINIMUM);
    }
  }, [currentTab, handlePanel])

  return (
    <div
      className={classes.root}
      style={{
        width: `${input_panel === MINIMUM ? PANEL_RATIO[INPUT_PANEL].minimized_width : PANEL_RATIO[INPUT_PANEL].width}%`
      }}
    >
      <div className={classes.panel}>
        InputPanel {currentTab}
      </div>
    </div>
  )
};

export default InputPanel;

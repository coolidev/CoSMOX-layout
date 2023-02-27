import { ReactNode, useContext, useEffect } from "react";
import {
  makeStyles
} from "@material-ui/core";
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

interface ResultPanelProps {
  currentTab: string;
  children?: ReactNode;
}

const ResultPanel = ({ currentTab, children }: ResultPanelProps) => {
  const { result_panel, handlePanel } = useContext(PanelContext)
  const classes = useStyles();

  useEffect(() => {
    if (currentTab !== '') {
      handlePanel(RESULT_PANEL, NORMAL);
    } else {
      handlePanel(RESULT_PANEL, MINIMUM);
    }
  }, [currentTab, handlePanel])

  return (
    <div
      className={classes.root}
      style={{
        width: `${result_panel === MINIMUM ? PANEL_RATIO[RESULT_PANEL].minimized_width : PANEL_RATIO[RESULT_PANEL].width}%`
      }}
    >
      <div className={classes.panel}>
        ResultPanel {currentTab}
      </div>
    </div>
  )
};

export default ResultPanel;

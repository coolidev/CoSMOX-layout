import { ReactNode } from "react";
import {
  Button,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { PANEL_RATIO, SIDE_MENU } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    // display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: `${PANEL_RATIO[SIDE_MENU].width}%`,
    height: '100%'
  },
  actions: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  side_menu_btn: {
    width: '64px',
    height: '64px',
    backgroundColor: 'blue',
    color: 'white',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  }
}))

interface SideMenuProps {
  currentTab: string;
  handleCurrentTab: Function;
  children?: ReactNode;
}

const SideMenu = ({ currentTab, children, handleCurrentTab }: SideMenuProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <Button className={classes.side_menu_btn} onClick={() => {handleCurrentTab(currentTab === '1' ? '' : '1')}}>1</Button>
        <Divider light={true} variant="middle" style={{ backgroundColor: 'white' }} />
        <Button className={classes.side_menu_btn} onClick={() => {handleCurrentTab(currentTab === '2' ? '' : '2')}}>2</Button>
        <Divider light={true} variant="middle" style={{ backgroundColor: 'white' }} />
        <Button className={classes.side_menu_btn} onClick={() => {handleCurrentTab(currentTab === '3' ? '' : '3')}}>3</Button>
      </div>
    </div>
  )
};

export default SideMenu;

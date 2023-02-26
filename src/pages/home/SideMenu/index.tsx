import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PANEL_RATIO, SIDE_MENU } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: `${PANEL_RATIO[SIDE_MENU].width}%`,
    height: '100%'
  }
}))

const SideMenu: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      SideMenu
    </div>
  )
};

export default SideMenu;

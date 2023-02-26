import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { PANEL_RATIO, TAB_MENU } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: `${PANEL_RATIO[TAB_MENU].width}%`,
    height: '100%'
  }
}))

const TabMenu: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      TabMenu
    </div>
  )
};

export default TabMenu;

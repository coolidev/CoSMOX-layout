import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '5%',
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

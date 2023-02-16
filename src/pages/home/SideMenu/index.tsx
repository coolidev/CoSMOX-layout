import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    width: '5vw',
    height: '90vh'
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

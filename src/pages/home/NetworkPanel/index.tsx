import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '100%',
    height: '44%'
  }
}))

const NetworkPanel: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      NetworkPanel
    </div>
  )
};

export default NetworkPanel;

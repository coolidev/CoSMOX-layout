import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    color: 'white',
    width: '35vw',
    height: '40vh'
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

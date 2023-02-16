import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'yellow',
    width: '35vw',
    height: '50vh'
  }
}))

const VisualizerPanel: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      VisualizerPanel
    </div>
  )
};

export default VisualizerPanel;
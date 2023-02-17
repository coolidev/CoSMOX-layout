import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: '100%',
    height: '56%'
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

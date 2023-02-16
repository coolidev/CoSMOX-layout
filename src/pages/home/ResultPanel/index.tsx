import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '30vw',
    height: '90vh'
  }
}))

const ResultPanel: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      ResultPanel
    </div>
  )
};

export default ResultPanel;

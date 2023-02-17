import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    width: '30%',
    height: '100%'
  }
}))

const InputPanel: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      InputPanel
    </div>
  )
};

export default InputPanel;

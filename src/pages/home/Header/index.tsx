import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { HEADER, PANEL_RATIO } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: 'white',
    height: `${PANEL_RATIO[HEADER].height}%`,
    width: '100%',
  }
}))

const Header: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Header
    </div>
  )
};

export default Header;

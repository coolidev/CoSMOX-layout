import { FC } from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "grey",
    color: 'white',
    height: '10vh',
    width: '100vw',
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

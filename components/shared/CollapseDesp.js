import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    width: "100%",
    background: "white",
    opacity: "1",
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleCollapse() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Collapse in={checked} collapsedSize={80}>
          <Paper elevation={4} className={classes.paper}>
            In order to understand what it takes to disappear, you have to have
            a solid plan to remove yourself from the internet. We could find
            things that could surprise or scare you. Our investigations are
            thorough and take time, but this is a necessary step. We’ll put
            together a comprehensive report on exactly to remove yourself from
            the internet.
          </Paper>
          <p style={{ marginTop: "1rem" }}>
            Note, we dont accept just anyone. For liability sake, we need to
            interview each person seeking to remove themselves from the internet
          </p>
          <button className="pricingTable-firstTable_table__getstart">
            <Link href="/contact"> Contact Us</Link>
          </button>
        </Collapse>
      </div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Read More"
      />
    </div>
  );
}

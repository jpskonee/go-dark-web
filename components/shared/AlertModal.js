import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    boxShadow: theme.shadows[5],
    padding: "2rem",
    border: "1px solid red",
    background: "black",
  },
  mobiWid: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  header: {
    fontSize: "2rem",
    textAlign: "center",
  },
  body: {
    fontSize: "0.8rem",
    textAlign: "center",
    lineHeight: "1.5rem",
  },
  img: {
    width: "80%",
    height: "18rem",
    margin: "1.5rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "14rem",
    },
  },
}));

export default function SimpleModal({ setAlert, alertMsg }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setAlert(false);
  };

  const body = (
    <div className={`${classes.paper} ${classes.mobiWid}`}>
      <h1 className={classes.header}>{alertMsg.header}</h1>
      <img className={classes.img} src={alertMsg.url} alt="alert pic" />
      <p className={classes.body}> {alertMsg.body}</p>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        className={classes.mobiWid}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem auto",
        }}
      >
        {body}
      </Modal>
    </div>
  );
}

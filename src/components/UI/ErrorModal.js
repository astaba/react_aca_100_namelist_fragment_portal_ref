import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ModalBackdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalDialog(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onConfirm={props.onConfirm} />,
        document.getElementById("modal-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalDialog
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm} />,
        document.getElementById("modal-dialog-root")
      )}
    </React.Fragment>
  );
}

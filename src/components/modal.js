import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MyForm from "../components/form"
import MyButton from "../components/button"
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 230,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #a3e5f0',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        height: 30,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 5.,
        color: "#000",
        "&:hover": {
            backgroundColor: "#a3e5f0",


        }
    }
}));
export default function MyModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <button className={classes.button} type="button" onClick={handleOpen}>
                submit information
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}  >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <MyForm />
                        <MyButton />
                    </div>
                </Fade>

            </Modal>
        </div>
    );
}

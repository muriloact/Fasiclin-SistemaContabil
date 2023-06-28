// import React from "react";
// import button from "@material-ui/core";
// import TextField from "@material-ui/core/TextField/TextField";
// import Dialog from "@material-ui/core/Dialog/Dialog";
// import DialogActions from "@material-ui/core/DialogActions/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
// import Children from "react";

// export default function ForDialog(props){
//     const [open, setOpen] = React.useState(false);

//     const hardleClickOpen = () =>{
//         props.setOpen(true);
//     };
    
//     const handleClose = () =>{
//         props.setOpen(false);
//     };

//     return(
//         <Children
//         open ={props.open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//         >
//             <DialogTitle id="form-dialog-title">Editar</DialogTitle>

//         </Children>
//     )


// }
import React from "react";  
import { Button } from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Dialog} from "@material-ui/core";
import {DialogActions} from "@material-ui/core";
import {DialogContent} from "@material-ui/core";
// import {DialogContentText} from "@material-ui/core";
import {DialogTitle} from "@material-ui/core";


export default function FormDialog(props){
    
    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };
    

    return(
        <>
            <Button className="btn-visualizar" variant="outlined" color="default" onClick={handleClickOpen} size="small">
                Vizualizar
            </Button>
            <Dialog
            open = {props.open}
            onClose = {handleClose}
            >
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                <DialogContent>
                    <TextField
                    autoFocus
                    id={"codigo"}
                    label="Codígo"
                    type="text"
                    fullWidth
                    />
                    <TextField
                    id="categoria"
                    label="Categoria"
                    type="text"
                    fullWidth
                    />
                    <TextField
                    id="precisao"
                    label="Precisão"
                    type="text"
                    fullWidth
                    />
                    <TextField
                    id="descricao"
                    label="Descrição"
                    type="text"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Excluir
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


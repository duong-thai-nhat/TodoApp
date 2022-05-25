import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { deleteTask } from '../../redux/actions/tasks';

import { useDispatch } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  };

function ModalDelete({id, idColumn}) {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = (idtask, idcolumn) => {
        const action = deleteTask(idtask, idcolumn);
        dispatch(action);
        handleClose();
    }

  return (
    <div>
        <IconButton onClick={handleOpen} aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
        </IconButton>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Stack spacing={2} style={{textAlign: 'right'}}>
                <Typography variant='p'>
                    <IconButton onClick={handleClose} aria-label="close" size="small">
                        <CloseIcon/>
                    </IconButton>
                </Typography>
            </Stack>
            
          <Box sx={{ textAlign: 'right', display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5">
              Delete Card
            </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <Typography variant="body1">
                You are sure delete Card?
            </Typography>

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'right' }}>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={()=>{handleDelete(id,idColumn)}}
            >
              Delete
            </Button>

          </Typography>
        </Box>
      </Modal>
    </div>

  )
}

export default ModalDelete
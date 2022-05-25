import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';

import { styled } from '@mui/material/styles';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask } from '../../redux/actions/tasks'

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import Card1 from '../../assets/img/itemcard1.jpg';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import '../../assets/css/modalAdd.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

export default function ModalAdd() {

  const dispatch = useDispatch();

  const [value, setValue] = React.useState(new Date());

  const [dataForm, setDataForm] = useState({
    id:'column3',
    name:'To do',
    propsAdd: {
      name: '',
      date: `24th May`,
      author: '',
      param: '',
      img: '' || Card1,
      linkGoogle: '',
      linkPsd: '',
      fab: '',
      mountMes: '',
      arrayAvatar: [],
    },
  })

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [img, setImg] = useState('')

  const handleOnChange = (e)=>{
    const nameKey = e.target.name

    setDataForm({...dataForm, propsAdd:{...dataForm.propsAdd ,[nameKey]: e.target.value}})

    console.log(nameKey, e.target.value)
    console.log(dataForm)

  }

  const handleOnChangeType = (e) => {
    const nameKey = e.target.name
    setDataForm({...dataForm, [nameKey]: e.target.value })
  }

  const handleImg = (e) => {
    const fReader = new FileReader();
    const nameKey = e.target.name
    console.log(nameKey)

    fReader.onload = function(){
      if(fReader.readyState === 2){
        setDataForm({...dataForm, propsAdd:{...dataForm.propsAdd ,img: fReader.result}})
      }
    }
    fReader.readAsDataURL(e.target.files[0])
  }
  
  const handleAdd = () => {
    console.log(typeof parseInt(dataForm.propsAdd.mount))
    let action = addNewTask(dataForm);
    console.log(dataForm)
    dispatch(action);
    handleClose()
  }

  return (
    <div className='modal__add'>
      <IconButton onClick={handleOpen} aria-label="add" size="small">
        <AddIcon fontSize="inherit" />
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
            <Typography variant="h4">
              Create new card
            </Typography>
            {/* <IconButton onClick={handleClose} aria-label="close" size="small">
              <CloseIcon/>
            </IconButton> */}
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container>
              <Grid item xs={6} sx={{ pr: 2 }}>
                <InputLabel fullWidth id="demo-simple-select-label">Type</InputLabel>
                <NativeSelect
                  onChange={handleOnChangeType}
                  fullWidth
                  defaultValue={'To do'}
                  inputProps={{
                    name: 'name',
                    id: 'uncontrolled-native',
                  }}
                  sx={{ mb: 4 }}
                >
                  <option value={'To do'}>To Do</option>
                  <option value={'Doing'}>Doing</option>
                  <option value={'Done'}>Done</option>
                </NativeSelect>
              </Grid>
              <Grid item xs={6} className='modal__add__Wrap__datepicker'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue)
                      const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
                      let time = new Date(newValue)
                      console.log(`${time.getDate()}th ${months[time.getMonth()]}`)
                      setDataForm({...dataForm, propsAdd:{...dataForm.propsAdd ,date: `${time.getDate()}th ${months[time.getMonth()]}`}})
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            {/* <InputLabel fullWidth id="demo-simple-select-label">Type</InputLabel>
            <NativeSelect
              onChange={handleOnChangeType}
              fullWidth
              defaultValue={'To do'}
              inputProps={{
                name: 'name',
                id: 'uncontrolled-native',
              }}
              sx={{ mb: 4 }}
            >
              <option value={'To do'}>To Do</option>
              <option value={'Doing'}>Doing</option>
              <option value={'Done'}>Done</option>
            </NativeSelect> */}
            <TextField sx={{ mt: -3 }} onChange={handleOnChange} fullWidth id="headercard-input" name='name' label="Headercard" variant="standard" />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue)
                  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                  let time = new Date(newValue)
                  console.log(`${time.getDate()}th ${months[time.getMonth()]}`)
                  setDataForm({...dataForm, propsAdd:{...dataForm.propsAdd ,date: `${time.getDate()}th ${months[time.getMonth()]}`}})
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <TextField sx={{ mt:2 }} onChange={handleOnChange} fullWidth id="author-input" name='author' label="Author" variant="standard" />
            <TextField sx={{ mt:2 }} onChange={handleOnChange} fullWidth id="param-input" name='param' label="Param" variant="standard" />
            <TextField sx={{ mt:4 }} fullWidth onChange={handleImg} name='img' type='file' id="param-input" variant="standard" />
            <TextField fullWidth sx={{ mt:2 }} onChange={handleOnChange} id="img-input" name='linkGoogle' label="linkGoogle" variant="standard" />
            <TextField fullWidth sx={{ mt:2 }} onChange={handleOnChange} id="img-input" name='linkPsd' label="linkPsd" variant="standard" />
            {/* <TextField fullWidth id="fab-input" name='fab' label="Fab" variant="standard" /> */}
            {/* <TextField fullWidth onChange={handleOnChange} id="mount-input" name='mountMes' label="Mount" variant="standard" /> */}

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'right' }}>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              // className={class}
              onClick={handleClose}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // className={class}
              onClick={handleAdd}
            >
              Add
            </Button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

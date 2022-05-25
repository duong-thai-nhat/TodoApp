import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardItem from '../../common/CardItem/CardItem';

import Stack from '@mui/material/Stack';

import { Container, Draggable } from "react-smooth-dnd";
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import ModalAdd from '../../common/Modals/modalAdd.jsx'

import { dragAndDrop } from '../../redux/actions/tasks'

import '../../assets/css/Tasks.css'

function Tasks() {

  const dataTask = useSelector(state => state.tasks.data);

  console.log(dataTask);
  const dispatch = useDispatch();

  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
  };

  const getCardPayload = (columnId, index) => {
    return dataTask.filter(p => p.id === columnId)[0].props[
      index
    ];
  }

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = dataTask;
      console.log(scene)
      const column = scene.filter(p => p.id === columnId)[0];
      const columnIndex = scene.indexOf(column);

      const newColumn = Object.assign({}, column);
      console.log(newColumn)
      console.log(newColumn.props)
      newColumn.props = applyDrag(newColumn.props, dropResult);
      scene.splice(columnIndex, 1, newColumn);

      console.log(scene )

      const action = dragAndDrop(scene);
      dispatch(action)
    }
  }

  return (
    <Box
        className='content__box'
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        <Grid container>
            <Grid container xs={12} spacing={4}>
              <Container style={{ width: '100%' }}
                orientation="horizontal"
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                  animationDuration: 150,
                  showOnTop: true,
                  className: 'cards-drop-preview'
                }}

              >
                {
                  dataTask.map((item)=>(
                    <Draggable>
                      <Grid className='content__box__wrap__column' item xs={12} spacing={4}>
                        <Typography className='content__box__card__header MuiTypography-h2'>
                          { item.name }
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <ModalAdd/>
                          </Stack>
                        </Typography>
                        <Container
                          groupName="col"
                          onDragStart={e => console.log("drag started", e)}
                          onDragEnd={e => console.log("drag end", e)}
                          onDrop={e => onCardDrop(item.id, e)}
                          getChildPayload={index => getCardPayload(item.id, index)}
                          dragClass="card-ghost"
                          dropClass="card-ghost-drop"
                          onDragEnter={() => {
                            console.log("drag enter:", item.id);
                          }}
                          onDragLeave={() => {
                            console.log("drag leave:", item.id);
                          }}
                          onDropReady={p => console.log('Drop ready: ', p)}
                          dropPlaceholder={{                      
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'drop-preview' 
                          }}
                          dropPlaceholderAnimationDuration={200}
                        >
                          {
                            item.props.map((props)=>(
                              <Draggable>
                                <CardItem 
                                    { ...props } idColumn = {item.id} 
                                />
                              </Draggable>
                            ))
                          }
                        </Container>
                      </Grid>
                    </Draggable>
                  ))
                }
              </Container>
            </Grid>
        </Grid>

      </Box>
  )
}

export default Tasks
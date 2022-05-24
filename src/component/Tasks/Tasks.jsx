import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
import Typography from '@mui/material/Typography';
import CardItem from '../CardItem/CardItem';

import Stack from '@mui/material/Stack';

import { Container, Draggable } from "react-smooth-dnd";
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import ModalAdd from '../../common/Modals/modalAdd.jsx'

import itemcard2 from '../../assets/img/itemcard1.jpg'
import Avatar1 from '../../assets/img/Avatar/avatar1.jpg'
import Avatar2 from '../../assets/img/Avatar/avatar2.jpg'

import { dragAndDrop } from '../../redux/actions/tasks'

import '../../assets/css/Tasks.css'

// Image
// import itemcard1 from '../../assets/img/itemcard1.jpg'
import { ListItem } from '@mui/material';

const initialState = {
  data: [
      {
        id:'column0',
        name:'To do',
        props:[
          {
            id: '00',
            name : 'Make a Kanban App',
            date: '12th Jan',
            author: 'Prahlad',
            param: 'Please use trello and designs in Dribbble as reference. And carry on...',
            img: itemcard2,
            linkGoogle: 'docs.google.c..',
            linkPsd: 'main.psd',
            arrayFab: [
              'Design',
            ],
            mountMes: 3,
            arrayAvatar: [
              Avatar1,
              Avatar2,
            ],
          },
          {
            id: '01',
            name : 'Fix his kid through any means',
            date: '12th Jan',
            author: 'Hiranya',
            linkPsd: 'main.psd',
            arrayFab: [
              'Design',
            ],
            mountMes: 3,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '02',
            name : 'Share it with friends',
            date: '12th Jan',
            author: 'Prahlad',
            mountMes: 7,
            arrayAvatar: [
              Avatar1,
              Avatar2,
            ]
          },
        ]
      },
      {
        id:'column1',
        name:'Doing',
        props:[
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },

        ]
      },
      {
        id:'column2',
        name:'Done',
        props:[
          {
            id: '01',
            name : 'Treatment by Fire',
            date: '12th Jan',
            author: 'Narshima',
            arrayFab: [
              'Design',
            ],
            mountMes: 8,
            arrayAvatar: [
              Avatar2,
            ]
          },
          {
            id: '02',
            name : 'Use Elephants and Snakes',
            date: '12th Jan',
            author: 'Kumar',
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
          {
            id: '00',
            name : 'Share the links for inspiration',
            date: '12th Jan',
            linkGoogle: 'dribbble.com/...',
            linkPsd: 'main.psd',
            mountMes: 1,
            arrayAvatar: [
              Avatar1,
            ]
          },
        ]
      },
  ],
}



const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};

function Tasks() {

  const dataTask = useSelector(state => state.tasks.data);
  // const [dataTask, setDataTask] = useState(initialState);

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

  // const onColumnDrop = (dropResult) => {
  //   const scene = Object.assign({}, dataTask);
  //   scene.data = applyDrag(scene.data, dropResult);
    
  //   setDataTask({
  //     ...scene
  //   });
  //   console.log('>>> inside onColumnDrop', dropResult)
  // }

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
                            {/* <IconButton aria-label="delete" size="small">
                              <AddIcon fontSize="inherit" />
                            </IconButton> */}
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
                                    {/* {
                                      console.log(item.id)
                                    } */}
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
            {/* <Grid item xs={4}>
              <Typography className='content__box__card__header MuiTypography-h2'>
                DOING
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton aria-label="delete" size="small">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              </Typography>
              {
                doingData.map((data)=>(
                  <CardItem 
                      { ...data }
                  />
                ))
              }
            </Grid>
            <Grid item xs={4}>
              <Typography className='content__box__card__header MuiTypography-h2'>
                DONE
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton aria-label="delete" size="small">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              </Typography>
              {
                doneData.map((data)=>(
                  <CardItem 
                      { ...data }
                  />
                ))
              }
            </Grid> */}
        </Grid>

      </Box>
  )
}

export default Tasks
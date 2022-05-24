import itemcard2 from '../../assets/img/itemcard1.jpg'
import Avatar1 from '../../assets/img/Avatar/avatar1.jpg'
import Avatar2 from '../../assets/img/Avatar/avatar2.jpg'

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
          ]
        },
        {
          id:'column2',
          name:'Done',
          props:[
            {
              id: '00',
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
              id: '01',
              name : 'Use Elephants and Snakes',
              date: '12th Jan',
              author: 'Kumar',
            },
          ]
        },
    ],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD__TASK':{
          const id = Math.floor(Math.random() * 10000);
          const newData = [...state.data]
          console.log(newData)
          for(let i=0; i<newData.length; i++){
            console.log(action.payload.name,newData[i].name)
            if(action.payload.name === newData[i].name){
              const props = { ...action.payload.propsAdd, id:id }
              newData[i].props.push(props);
              console.log(props)
            }
          }
          return {
            ...state,
            data: [...newData]
          };
        }
        
        case 'DELETE__TASK': {
          const newData = [ ...state.data ]
          for(let i = 0; i < newData.length; i++){
            console.log(newData[i].id,action.payload.idColumn)
            if(newData[i].id === action.payload.idColumn){
              console.log(newData[i].id,action.payload.idColumn)
              for(let j = 0; j < newData[i].props.length; j++){
                console.log(newData[i].props[j].id,action.payload.idTask)
                if(newData[i].props[j].id === action.payload.idTask){
                  console.log(newData[i].props[j].id,action.payload.idTask)
                  newData[i].props.splice( j ,1)
                }
              }
            }
          }
          console.log(newData)
          return {
            ...state,
            data: [...newData]
          }
        }

        case 'DRAG__AND__DROP':{
          const newData = [ ...action.payload ]
          return {
            ...state,
            data: [...newData]
          };
        }
    
        default:
            return state;
    }
}

export default tasksReducer;
const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch(action.type) {
    // Aca va tu codigo;
    case 'AddTodo': 
    return [...state, 
      {...action.payload}
    ]

    case 'RemoveTodo':
      return state = state.filter( (element) => { return element.id !== action.payload } );

    case 'ToInProgress':
        state.forEach(element => {
          if(element.id === action.payload){
            element.status = 'InProgress';
          }
        })
        return state;

    case 'ToDone':
      state.forEach(element => { element.status = 'Done' });
      return state;

    default:
      return state;

  }
}

export default todos;

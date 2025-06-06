import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
const initialState=[
    // {
    //     id:new Date().getTime(),
    //     description:'Recolectar la piedra del Alma',
    //     done:false,
    // },
  
]

const init = ()=>{
        return JSON.parse(localStorage.getItem('todos'))||[];
}


export const TodoApp = () => {
    
   

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    


    const handleNewTodo=(todo)=>{
        const action={
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action);
    }
   
  return (
    
    <>



        <h1>TodoApp(10), <small> pendientes: 2 </small></h1>

        <hr />

        <div className="row">
            <div className="col-7">

                {/* {TodoList} */}   
                
                   <TodoList todo={todos}/>
                  
        
                {/* {fin TodoList} */}


            </div>

            <div className="col-5">
               
                <h4>Agregar TODO </h4>
                <hr />


                <TodoAdd  onNewTodo={handleNewTodo} />
        
               


                 {/* {fintodoAdd} */}
            </div>


        </div>


    
    </>
  )
}

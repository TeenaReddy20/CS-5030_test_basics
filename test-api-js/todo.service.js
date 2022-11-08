class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;

    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){ 
           a= {"todo":[{  
                "title": "T2",
                "description": "D2",
                "done": false
         } ]}
            this.todo_data.todo.push(todo);
            return(this.todos);
            console.log(this.todos);
    }

    delete_todo(id){
        
            delete this.todo_data.todo[id];
            this.delete_todo.splice(id, 1);
            console.log(this.todos);
    }

    update_todo(id, todo){
        this.todo_data.todo[id] = todo;
        console.log("Update");
        return this.todos;
    }
}
module.exports= todoservice;

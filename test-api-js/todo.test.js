

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

});

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todoservice.get_todos().todo.length).toEqual(3);
    });

    describe ('todoservice', () => {
        test('add_todo', () => {
            todo_service.add_todo({
                'title': 'T2',
                'description': 'D2',
                'done': false
            })
            expect(todoservice.get_todos().todo.length).toEqual(4);
          });

    });

    test("delete_todo", () => {
        todo_service.delete_todo(3)
        expect(todo_service.delete_todo(5)).toEqual(false);
    })

        test("update_todo", () => {
            expect(todoservice.update_todo(3, {
                'title': 'Update',
                'description': 'Updating',
                'done': true
            })).toEqual(false);



});
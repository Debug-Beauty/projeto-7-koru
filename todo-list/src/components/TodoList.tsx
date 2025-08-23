import TodoItem, { type Todo } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, patch: Partial<Todo>) => void;
};

export default function TodoList({
  todos,
  onToggle,
  onRemove,
  onEdit,
}: TodoListProps) {
  return (
    <ul className="grid gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

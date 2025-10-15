import { useState } from "react";
import Tag from "./Tag";

export type Priority = 0 | 1 | 2;

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  completedAt?: number | null;
  dueAt?: number | null;
  priority?: Priority;
  tags?: string[];
};

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, patch: Partial<Todo>) => void;
};

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
  onEdit,
}: TodoItemProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.title);

  function save() {
    const t = title.trim();
    if (!t) return;
    onEdit(todo.id, { title: t });
    setEditing(false);
  }

  const overdue =
    typeof todo.dueAt === "number" &&
    !todo.completed &&
    todo.dueAt < Date.now();

  return (
    <li className="group flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/10">
      <button
        onClick={() => onToggle(todo.id)}
        className={`mt-1 size-5 rounded border flex items-center justify-center ${
          todo.completed
            ? "bg-emerald-500 border-emerald-500"
            : "border-white/30"
        }`}
        title={
          todo.completed ? "Marcar como pendente" : "Marcar como concluída"
        }
      >
        {todo.completed && (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </button>

      <div className="flex-1">
        {editing ? (
          <div className="flex items-center gap-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 bg-zinc-900/40 rounded px-2 py-1 outline-none ring-1 ring-white/10"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
            <button
              className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-sm"
              onClick={save}
            >
              Salvar
            </button>
            <button
              className="px-2 py-1 rounded bg-white/10 text-sm"
              onClick={() => setEditing(false)}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <p
                className={`font-medium ${
                  todo.completed ? "line-through text-zinc-400" : ""
                }`}
              >
                {todo.title}
              </p>

              {typeof todo.priority === "number" && todo.priority > 0 && (
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    todo.priority === 2 ? "bg-red-600" : "bg-amber-600"
                  }`}
                >
                  {todo.priority === 2 ? "Urgente" : "Alta"}
                </span>
              )}

              {typeof todo.dueAt === "number" && (
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    overdue ? "bg-rose-700" : "bg-white/10"
                  }`}
                >
                  vence {new Date(todo.dueAt).toLocaleDateString()}
                </span>
              )}

              {todo.tags?.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {todo.completed && todo.completedAt && (
              <p className="text-xs text-zinc-400 mt-1">
                concluída em {new Date(todo.completedAt).toLocaleString()}
              </p>
            )}
          </>
        )}
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
        {!editing && (
          <button
            className="p-2 rounded-lg hover:bg-white/10"
            onClick={() => setEditing(true)}
            title="Editar"
          >
            ✏️
          </button>
        )}
        <button
          className="p-2 rounded-lg hover:bg-white/10"
          onClick={() => onRemove(todo.id)}
          title="Excluir"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

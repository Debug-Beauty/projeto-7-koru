export type FilterValue = "all" | "active" | "done";

type FiltersProps = {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
};

export default function Filters({ value, onChange }: FiltersProps) {
  const items: { id: FilterValue; label: string }[] = [
    { id: "all", label: "Todas" },
    { id: "active", label: "Pendentes" },
    { id: "done", label: "Concluídas" },
  ];

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onChange(it.id)}
          className={`px-3 py-1.5 rounded-lg text-sm transition
            ${
              value === it.id
                ? "bg-zinc-100 text-zinc-900"
                : "bg-white/10 hover:bg-white/20 text-zinc-100 backdrop-blur"
            }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

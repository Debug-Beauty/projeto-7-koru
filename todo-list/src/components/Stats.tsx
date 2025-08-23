export type StatsProps = {
  total: number;
  active: number;
  done: number;
  onClearDone: () => void;
};

export default function Stats({
  total,
  active,
  done,
  onClearDone,
}: StatsProps) {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm">
      <span className="rounded-lg bg-white/10 backdrop-blur px-2 py-1">
        Total: {total}
      </span>
      <span className="rounded-lg bg-white/10 backdrop-blur px-2 py-1">
        Pendentes: {active}
      </span>
      <span className="rounded-lg bg-white/10 backdrop-blur px-2 py-1">
        Concluídas: {done}
      </span>
      {done > 0 && (
        <button
          onClick={onClearDone}
          className="ml-2 rounded-lg bg-rose-600 hover:bg-rose-500 px-2 py-1"
          title="Remover concluídas"
        >
          Limpar concluídas
        </button>
      )}
    </div>
  );
}

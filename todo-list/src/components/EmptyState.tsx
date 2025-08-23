type EmptyStateProps = {
  hasTodos: boolean;
};

export default function EmptyState({ hasTodos }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-zinc-200 bg-white/5 backdrop-blur">
      {hasTodos
        ? "Nenhum item corresponde aos filtros/busca."
        : "Sua lista está vazia. Comece adicionando uma tarefa acima!"}
    </div>
  );
}

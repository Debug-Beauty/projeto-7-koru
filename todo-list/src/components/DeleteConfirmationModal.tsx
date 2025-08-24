type ModalProps = {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function DeleteConfirmationModal({
    isOpen,
    onCancel,
    onConfirm,
}: ModalProps) {
    // Se não estiver aberto, não renderiza nada
    if (!isOpen) {
        return null;
    }

    return (       
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onCancel} 
        >
            {/* Painel do Modal */}
            <div
                className="mx-4 w-full max-w-sm rounded-2xl bg-slate-800 p-6 shadow-xl ring-1 ring-white/10"
                onClick={(e) => e.stopPropagation()} 
            >
                <h3 className="text-lg font-bold text-zinc-100">Apagar Tarefa</h3>
                <p className="mt-2 text-sm text-zinc-300">
                    Você tem certeza que deseja apagar esta tarefa? Não será possível recuperar a tarefa após a exclusão.
                </p>

                {/* Botões de Ação */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/20"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
                    >
                        Apagar
                    </button>
                </div>
            </div>
        </div>
    );
}
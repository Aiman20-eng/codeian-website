"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
  action: (id: string) => Promise<void>;
  label?: string;
}

export default function DeleteButton({ id, action, label }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await action(id);
    } catch (error) {
      console.error("Delete failed:", error);
      alert("حدث خطأ أثناء الحذف");
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  if (showConfirm) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg flex items-center gap-1"
        >
          {isDeleting ? <Loader2 size={14} className="animate-spin" /> : null}
          تأكيد الحذف
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded-lg"
        >
          إلغاء
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
      title={label || "حذف"}
    >
      <Trash2 size={18} />
    </button>
  );
}

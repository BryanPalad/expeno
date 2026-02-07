"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 border border-gray-100 z-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
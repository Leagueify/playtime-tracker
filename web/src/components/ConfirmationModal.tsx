import React from "react";

type ModalProps = {
  title: string,
  children: React.ReactNode;
};

export default function ConfirmationModal({ title, children }: ModalProps) {
  return (
    <div className="z-100 fixed max-w-md mx-auto inset-0 flex items-center justify-center bg-black/80">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4">{title}</p>
        <div className="flex justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function EmptyStateView({ onAction }) {
  return (
    <div className="text-center py-12">
      <img
        src="/empty-illustration.svg"
        alt="Empty"
        className="mx-auto w-48 h-48 mb-6"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No timers yet
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Create countdown timers to promote your sales and special offers.
      </p>
      <button className="btn-primary" onClick={onAction}>
        Create timer
      </button>
    </div>
  );
}

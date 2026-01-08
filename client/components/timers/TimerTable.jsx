import React from "react";

export default function TimerTable({ timers = [], onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Timer
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Description
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Start
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              End
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {timers.map((t) => (
            <tr key={t.id || t._id}>
              <td className="px-4 py-3 text-sm text-gray-800">{t.timerName}</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {t.promotionDescription || "—"}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {t.startDateTime}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {t.endDateTime}
              </td>
              <td className="px-4 py-3 text-sm">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    t.status === "active"
                      ? "bg-green-100 text-green-800"
                      : t.status === "scheduled"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {t.status?.charAt(0).toUpperCase() +
                    (t.status?.slice(1) || "")}
                </span>
              </td>
              <td className="px-4 py-3 text-right table-actions">
                <button className="edit mr-2" onClick={() => onEdit(t)}>
                  Edit
                </button>
                <button className="delete" onClick={() => onDelete(t)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

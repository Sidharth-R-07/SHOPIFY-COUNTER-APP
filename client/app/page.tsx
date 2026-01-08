"use client";
import React, { useState, useMemo } from "react";

export interface Timer {
  id?: string;
  _id?: string;
  timerName?: string;
  startDateTime?: string;
  endDateTime?: string;
  status?: string;
}
import Providers from "./providers";
import TimerTable from "../components/timers/TimerTable";
import TimerModal from "../components/timers/TimerModal";
import DeleteTimerModal from "../components/timers/DeleteTimerModal";
import EmptyStateView from "../components/common/EmptyStateView";
import LoadingState from "../components/common/LoadingState";
import useTimers from "../hooks/useTimers";
import { PlusIcon } from "@shopify/polaris-icons";
import { formatDateTime } from "../utils/dateUtils";

export default function Home() {
  const {
    timers = [] as Timer[],
    loading,
    fetchTimers,
    createTimer,
    updateTimer,
    deleteTimer,
  } = useTimers();
  const [searchQuery, setSearchQuery] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState<{
    id?: string;
    _id?: string;
  } | null>(null);
  const [toastActive, setToastActive] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [timerToDelete, setTimerToDelete] = useState<{
    id?: string;
    _id?: string;
  } | null>(null);

  const handleCreateTimer = () => {
    setSelectedTimer(null);
    setModalActive(true);
  };

  const handleEditTimer = (t: any) => {
    setSelectedTimer(t);
    setModalActive(true);
  };

  const handleDeleteClick = (t: any) => {
    setTimerToDelete(t);
    setDeleteModalActive(true);
  };

  const handleSaveTimer = async (payload: any) => {
    if (selectedTimer)
      await updateTimer(selectedTimer.id || selectedTimer._id, payload);
    else await createTimer(payload);
    fetchTimers();
    setModalActive(false);
  };

  const handleDeleteConfirm = async () => {
    if (!timerToDelete) return;
    await deleteTimer(timerToDelete.id || timerToDelete._id);
    fetchTimers();
    setDeleteModalActive(false);
    setTimerToDelete(null);
  };

  const filtered = useMemo(
    () =>
      timers.filter((t) =>
        (t.timerName || "").toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [timers, searchQuery]
  );

  const mapped: Timer[] = filtered.map((t) => ({
    ...t,
    startDateTime: formatDateTime(t.startDateTime),
    endDateTime: formatDateTime(t.endDateTime),
    status:
      t.startDateTime && t.endDateTime
        ? new Date() < new Date(t.startDateTime)
          ? "scheduled"
          : new Date() <= new Date(t.endDateTime)
          ? "active"
          : "expired"
        : "scheduled",
  }));

  return (
    <Providers>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Countdown Timer Manager
              </h1>
              <p className="text-sm text-gray-600">
                Create and manage countdown timers for your promotions
              </p>
            </div>
            <div>
              <button
                className="btn-primary"
                onClick={() => handleCreateTimer()}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Create Timer</span>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-200 rounded-md"
                placeholder="Search timers"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {loading ? (
              <LoadingState />
            ) : mapped.length === 0 ? (
              <EmptyStateView onAction={() => handleCreateTimer()} />
            ) : (
              <TimerTable
                timers={mapped || []}
                onEdit={handleEditTimer}
                onDelete={handleDeleteClick}
              />
            )}
          </div>
        </div>

        <TimerModal
          active={modalActive}
          timer={selectedTimer}
          onClose={() => setModalActive(false)}
          onSave={handleSaveTimer}
        />

        <DeleteTimerModal
          open={deleteModalActive}
          timer={timerToDelete}
          onClose={() => setDeleteModalActive(false)}
          onDelete={handleDeleteConfirm}
        />
      </div>
    </Providers>
  );
}

import { useState, useCallback } from "react";
import timerApi from "../services/timerApi";

const useTimers = () => {
  const [timers, setTimers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTimers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await timerApi.getAll();
      setTimers(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError("Failed to load timers");
      setTimers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const createTimer = async (payload) => {
    await timerApi.create(payload);
    fetchTimers();
  };

  const updateTimer = async (id, payload) => {
    await timerApi.update(id, payload);
    fetchTimers();
  };

  const deleteTimer = async (id) => {
    await timerApi.delete(id);
    fetchTimers();
  };

  return {
    timers,
    loading,
    error,
    fetchTimers,
    createTimer,
    updateTimer,
    deleteTimer,
  };
};

export default useTimers;

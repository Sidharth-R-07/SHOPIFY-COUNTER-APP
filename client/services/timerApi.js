const API_BASE_URL = "http://localhost:5000";

const timerApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/timers`);
    if (!response.ok) throw new Error("Failed to fetch timers");
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/timers/${id}`);
    if (!response.ok) throw new Error("Failed to fetch timer");
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/timers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create timer");
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/api/timers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update timer");
    return response.json();
  },
  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/timers/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete timer");
    return response.json();
  },
};

export default timerApi;

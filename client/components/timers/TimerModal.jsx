import React, { useState, useEffect } from "react";
import { Modal, TextField, Select } from "@shopify/polaris";
import ColorPicker from "./ColorPicker";
import {
  formatDateForInput,
  formatTimeForInput,
  combineDateTime,
} from "../../utils/dateUtils";

const TimerModal = ({ active, timer, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    timerName: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    promotionDescription: "",
    timerColor: "#00FF00",
    timerSize: "Medium",
    timerPosition: "Top",
    urgencyNotification: "Color pulse",
    isActive: true,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer) {
      setFormData({
        timerName: timer.timerName || "",
        startDate: formatDateForInput(timer.startDateTime),
        startTime: formatTimeForInput(timer.startDateTime),
        endDate: formatDateForInput(timer.endDateTime),
        endTime: formatTimeForInput(timer.endDateTime),
        promotionDescription: timer.promotionDescription || "",
        timerColor: timer.timerColor || "#00FF00",
        timerSize: timer.timerSize || "Medium",
        timerPosition: timer.timerPosition || "Top",
        urgencyNotification: timer.urgencyNotification || "Color pulse",
        isActive: timer.isActive !== undefined ? timer.isActive : true,
      });
    } else {
      setFormData({
        timerName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        promotionDescription: "",
        timerColor: "#00FF00",
        timerSize: "Medium",
        timerPosition: "Top",
        urgencyNotification: "Color pulse",
        isActive: true,
      });
    }
  }, [timer]);

  const validate = () => {
    const newErrors = {};
    if (!formData.timerName.trim())
      newErrors.timerName = "Timer name is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (!formData.endTime) newErrors.endTime = "End time is required";
    if (
      formData.startDate &&
      formData.startTime &&
      formData.endDate &&
      formData.endTime
    ) {
      const start = combineDateTime(formData.startDate, formData.startTime);
      const end = combineDateTime(formData.endDate, formData.endTime);
      if (new Date(start) >= new Date(end)) {
        newErrors.endDate = "End must be after start";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = {
        timerName: formData.timerName,
        startDateTime: combineDateTime(formData.startDate, formData.startTime),
        endDateTime: combineDateTime(formData.endDate, formData.endTime),
        promotionDescription: formData.promotionDescription,
        timerColor: formData.timerColor,
        timerSize: formData.timerSize,
        timerPosition: formData.timerPosition,
        urgencyNotification: formData.urgencyNotification,
        isActive: formData.isActive,
      };
      await onSave(payload);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={active}
      onClose={onClose}
      title={timer ? "Edit Timer" : "Create New Timer"}
      primaryAction={{
        content: timer ? "Update timer" : "Create timer",
        onAction: handleSubmit,
        loading,
      }}
      secondaryActions={[{ content: "Cancel", onAction: onClose }]}
      large
    >
      <Modal.Section>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timer name
            </label>
            <TextField
              value={formData.timerName}
              onChange={(value) =>
                setFormData({ ...formData, timerName: value })
              }
              placeholder="Enter timer name"
              error={errors.timerName}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start date
              </label>
              <TextField
                value={formData.startDate}
                onChange={(value) =>
                  setFormData({ ...formData, startDate: value })
                }
                placeholder="MM/DD/YYYY"
                error={errors.startDate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start time
              </label>
              <TextField
                value={formData.startTime}
                onChange={(value) =>
                  setFormData({ ...formData, startTime: value })
                }
                placeholder="HH:MM"
                error={errors.startTime}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End date
              </label>
              <TextField
                value={formData.endDate}
                onChange={(value) =>
                  setFormData({ ...formData, endDate: value })
                }
                placeholder="MM/DD/YYYY"
                error={errors.endDate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End time
              </label>
              <TextField
                value={formData.endTime}
                onChange={(value) =>
                  setFormData({ ...formData, endTime: value })
                }
                placeholder="HH:MM"
                error={errors.endTime}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Promotion description
            </label>
            <TextField
              value={formData.promotionDescription}
              onChange={(value) =>
                setFormData({ ...formData, promotionDescription: value })
              }
              multiline={4}
              placeholder="Enter promotion details"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timer color
            </label>
            <div className="max-w-xs">
              <ColorPicker
                value={formData.timerColor}
                onChange={(c) => setFormData({ ...formData, timerColor: c })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timer size
              </label>
              <Select
                options={[
                  { label: "Small", value: "Small" },
                  { label: "Medium", value: "Medium" },
                  { label: "Large", value: "Large" },
                ]}
                value={formData.timerSize}
                onChange={(v) => setFormData({ ...formData, timerSize: v })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timer position
              </label>
              <Select
                options={[
                  { label: "Top", value: "Top" },
                  { label: "Below Title", value: "Below Title" },
                  { label: "Above Buy Button", value: "Above Buy Button" },
                ]}
                value={formData.timerPosition}
                onChange={(v) => setFormData({ ...formData, timerPosition: v })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urgency notification
            </label>
            <Select
              options={[
                { label: "None", value: "None" },
                { label: "Color pulse", value: "Color pulse" },
                { label: "Blink", value: "Blink" },
                { label: "Shake", value: "Shake" },
              ]}
              value={formData.urgencyNotification}
              onChange={(v) =>
                setFormData({ ...formData, urgencyNotification: v })
              }
            />
          </div>
        </div>
      </Modal.Section>
    </Modal>
  );
};

export default TimerModal;

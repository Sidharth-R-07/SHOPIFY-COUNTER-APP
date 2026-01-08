import React from "react";
import { Modal } from "@shopify/polaris";

export default function DeleteTimerModal({ open, timer, onClose, onDelete }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Delete timer"
      primaryAction={{
        content: "Delete",
        destructive: true,
        onAction: onDelete,
      }}
      secondaryActions={[{ content: "Cancel", onAction: onClose }]}
    >
      <Modal.Section>
        <p>
          Are you sure you want to delete <strong>{timer?.timerName}</strong>?
          This action cannot be undone.
        </p>
      </Modal.Section>
    </Modal>
  );
}

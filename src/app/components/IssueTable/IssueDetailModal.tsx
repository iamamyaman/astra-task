"use client"

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Issue } from '@/types/Issues';
import { formatDate } from '@/utils/date';


interface IssueDetailModalProps {
  selectedRow: Issue | null;
  onOpenChange: (open: boolean) => void;
}

interface DetailItemProps {
  label: string;
  value: string | number | string[];
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div className="flex flex-col space-y-1">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-900">
      {Array.isArray(value) ? value.join(", ") : value}
    </span>
  </div>
);

const IssueDetailModal: React.FC<IssueDetailModalProps> = ({ selectedRow, onOpenChange }) => {
  if (!selectedRow) return null;

  const leftColumnDetails = [
    { label: "Identifier", value: selectedRow.identifier },
    { label: "Title", value: selectedRow.title },
    { label: "Labels", value: selectedRow.labels },
    { label: "Project", value: selectedRow.project },
    { label: "Assignee", value: selectedRow.assignee },
    { label: "Cycle", value: selectedRow.cycle },
  ];

  const rightColumnDetails = [
    { label: "Estimate", value: selectedRow.estimate },
    { label: "Priority", value: selectedRow.priority },
    { label: "Status", value: selectedRow.status },
    { label: "Created At", value: formatDate(selectedRow.createdAt) },
    { label: "Due Date", value: formatDate(selectedRow.dueDate) },
    { label: "Updated At", value: formatDate(selectedRow.updatedAt) },
  ];

  return (
    <Dialog 
      open={!!selectedRow} 
      onOpenChange={onOpenChange}
      aria-label="Issue Details"
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Issue Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            {leftColumnDetails.map((detail) => (
              <DetailItem
                key={detail.label}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
          
          <div className="space-y-4">
            {rightColumnDetails.map((detail) => (
              <DetailItem
                key={detail.label}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IssueDetailModal

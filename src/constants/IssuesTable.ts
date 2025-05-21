export const groupingOptions = [
  { value: "none", label: "None" },
  { value: "status", label: "Status" },
  { value: "assignee", label: "Assignee" },
  { value: "cycle", label: "Cycle" },
  { value: "estimate", label: "Estimate" },
];

export const columnFilterKeys = [
  "status",
  "project",
  "priority",
  "assignee",
  "cycle",
];

export const sortableKeys = [
  "createdAt",
  "dueDate",
  "updatedAt",
  "priority",
  "estimate",
];

export const columnConfig = [
  {
    accessorKey: "identifier",
    header: "Identifier",
    cell: (info:any) => info.getValue(),
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: (info:any) => info.getValue(),
    enableSorting: false,
  },
  {
    accessorKey: "labels",
    header: "Labels",
    cell: (info:any) => (info.getValue() as string[]).join(", "),
    enableSorting: false,
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: (info:any) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: false,
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: (info:any) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: false,
    enableGrouping: true,
  },
  {
    accessorKey: "cycle",
    header: "Cycle",
    cell: (info:any) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: false,
    enableGrouping: true,
  },
  {
    accessorKey: "estimate",
    header: "Estimate",
    cell: (info:any) => info.getValue(),
    enableSorting: true,
    enableColumnFilter: true,
    enableGrouping: true,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: (info:any) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info:any) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: false,
    enableGrouping: true,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (info:any) =>
      new Date(info.getValue() as string).toLocaleDateString(),
    enableSorting: true,
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: (info:any) =>
      new Date(info.getValue() as string).toLocaleDateString(),
    enableSorting: true,
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: (info:any) =>
      new Date(info.getValue() as string).toLocaleDateString(),
    enableSorting: true,
  },
];
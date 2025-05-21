export type Issue = {
    identifier: string;
    title: string;
    labels: string[];
    project: string;
    assignee: string;
    cycle: string;
    estimate: number;
    priority: string;
    status: string;
    createdAt: string;
    dueDate: string;
    updatedAt: string;
    description:string
  };
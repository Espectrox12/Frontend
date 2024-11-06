export interface Task {
    id?: number;
    nametask: string;
    statustasks: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
  
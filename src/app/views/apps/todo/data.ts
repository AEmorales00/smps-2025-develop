export interface taskType {
  checkbox_id: string
  user_image: string
  task: string
  status: string
  assigned_to: string
  due_date: string
  priority: string
  actions: [
    {
      type: string
      icon: string
      color: string
    },
    {
      type: string
      icon: string
      color: string
    },
  ]
}
export const tasks: taskType[] = [
  {
    checkbox_id: 'customCheck1',
    user_image: 'assets/images/users/user.jpg',
    task: 'Create A New React app',
    status: 'In Progress',
    assigned_to: 'Alexander White',
    due_date: 'Due in 3 days',
    priority: 'High',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck2',
    user_image: 'assets/images/users/user-2.jpg',
    task: 'Finish project report',
    status: 'Not Started',
    assigned_to: 'Sophia Williams',
    due_date: '15 August 2024',
    priority: 'Medium',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck3',
    user_image: 'assets/images/users/user-4.jpg',
    task: 'Implement user authentication',
    status: 'Completed',
    assigned_to: 'Dale Osuna',
    due_date: '11 August 2024',
    priority: 'Low',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck4',
    user_image: 'assets/images/users/user-5.jpg',
    task: 'Code review for feature branch',
    status: 'Inactive',
    assigned_to: 'Willie Makin',
    due_date: '18 August 2024',
    priority: 'High',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck5',
    user_image: 'assets/images/users/user-8.jpg',
    task: 'Fix bug in payment processing',
    status: 'Active',
    assigned_to: 'Steven Hall',
    due_date: '21 August 2024',
    priority: 'Medium',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck6',
    user_image: 'assets/images/users/user-9.jpg',
    task: 'Write unit tests for new API',
    status: 'Not Started',
    assigned_to: 'John Spray',
    due_date: '16 August 2024',
    priority: 'High',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck7',
    user_image: 'assets/images/users/user-4.jpg',
    task: 'Update documentation for REST API',
    status: 'In Progress',
    assigned_to: 'Guillermo Pollard',
    due_date: '21 August 2024',
    priority: 'Low',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck5',
    user_image: 'assets/images/users/user-8.jpg',
    task: 'Fix bug in payment processing',
    status: 'Active',
    assigned_to: 'Steven Hall',
    due_date: '21 August 2024',
    priority: 'Medium',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck6',
    user_image: 'assets/images/users/user-9.jpg',
    task: 'Write unit tests for new API',
    status: 'Not Started',
    assigned_to: 'John Spray',
    due_date: '16 August 2024',
    priority: 'High',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
  {
    checkbox_id: 'customCheck3',
    user_image: 'assets/images/users/user-4.jpg',
    task: 'Implement user authentication',
    status: 'Completed',
    assigned_to: 'Dale Osuna',
    due_date: '11 August 2024',
    priority: 'Low',
    actions: [
      {
        type: 'Edit',
        icon: 'mdi mdi-pencil-outline',
        color: 'text-primary',
      },
      {
        type: 'Delete',
        icon: 'mdi mdi-delete',
        color: 'text-danger',
      },
    ],
  },
]

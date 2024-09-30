export interface Entry {
  dueDate: string;
  accountType: string;
  description: string;
  transactionStatus: string;
  value: string;
}

export const entriesMock: Entry[] = [
  {
    dueDate: "2024-09-01",
    accountType: "Rent",
    description: "Monthly rent payment",
    transactionStatus: "Pendente",
    value: "1.200,00",
  },
  {
    dueDate: "2024-09-03",
    accountType: "Utilities",
    description: "Electricity bill",
    transactionStatus: "Pago",
    value: "150,50",
  },
  {
    dueDate: "2024-09-05",
    accountType: "Groceries",
    description: "Grocery shopping",
    transactionStatus: "Pendente",
    value: "300,75",
  },
  {
    dueDate: "2024-09-07",
    accountType: "Subscription",
    description: "Netflix monthly",
    transactionStatus: "Pago",
    value: "19,99",
  },
  {
    dueDate: "2024-09-10",
    accountType: "Internet",
    description: "Internet bill",
    transactionStatus: "Pago",
    value: "75,00",
  },
  {
    dueDate: "2024-09-12",
    accountType: "Health",
    description: "Health insurance",
    transactionStatus: "Pendente",
    value: "500,00",
  },
  {
    dueDate: "2024-09-15",
    accountType: "Loan",
    description: "Car loan payment",
    transactionStatus: "Pago",
    value: "450,00",
  },
  {
    dueDate: "2024-09-18",
    accountType: "Credit Card",
    description: "Credit card bill",
    transactionStatus: "Pendente",
    value: "1.000,00",
  },
  {
    dueDate: "2024-09-20",
    accountType: "Rent",
    description: "Monthly rent payment",
    transactionStatus: "Pago",
    value: "1.200,00",
  },
  {
    dueDate: "2024-09-22",
    accountType: "Utilities",
    description: "Water bill",
    transactionStatus: "Pendente",
    value: "60,25",
  },
  {
    dueDate: "2024-09-25",
    accountType: "Entertainment",
    description: "Movie tickets",
    transactionStatus: "Pago",
    value: "50,00",
  },
  {
    dueDate: "2024-09-27",
    accountType: "Insurance",
    description: "Car insurance",
    transactionStatus: "Pendente",
    value: "200,00",
  },
  {
    dueDate: "2024-09-29",
    accountType: "Subscription",
    description: "Amazon Prime monthly",
    transactionStatus: "Pendente",
    value: "12,99",
  },
  {
    dueDate: "2024-09-30",
    accountType: "Loan",
    description: "Student loan payment",
    transactionStatus: "Pago",
    value: "300,00",
  },
  {
    dueDate: "2024-10-01",
    accountType: "Mortgage",
    description: "Monthly mortgage payment",
    transactionStatus: "Pago",
    value: "1.500,00",
  },
];

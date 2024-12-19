import { User } from "@/types/User";

// src/utils/localStorage.ts
const STORAGE_KEY = "users";

export const getUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const findUser = (email: string, password: string): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.email === email && user.password === password);
};

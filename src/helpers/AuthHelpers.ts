export type User = {
  name: string;
  email: string;
  role: string;
};

type StoredUser = User & {
  password: string;
};

export const getRegisteredUsers = (): StoredUser[] => {
  return JSON.parse(localStorage.getItem("nexusflow-users") || "[]");
};

export const saveRegisteredUser = (user: StoredUser) => {
  const users = getRegisteredUsers();
  localStorage.setItem("nexusflow-users", JSON.stringify([...users, user]));
};

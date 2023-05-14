import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save(); //built in instance method
  user.fullName(); //custom instance method
  return user;
};

export const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserById = async (
  payload: string | null
): Promise<IUser | null> => {
  const users = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return users;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

// router --> controller --> service

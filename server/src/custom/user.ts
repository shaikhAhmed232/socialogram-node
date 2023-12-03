export interface IUser {
    id?:number;
    username: string;
    email: string;
    password?:string,
    mobileNo?: string | null;
    profilePic?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null; 
  };

export type UserList = {
    users: IUser[]
};

export type SingleUser = {
  user: IUser;
}
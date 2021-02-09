export interface IQuery {
    email?: string;
    name?: string;
    deletedAt?: Date;
    role?: string;
    originalId?: string;
    password?: string;
    id?: string;
    createdAt?: Date;
}

export interface ICreate {
    email: string;
    password: string;
    name: string;
    role: string;
}

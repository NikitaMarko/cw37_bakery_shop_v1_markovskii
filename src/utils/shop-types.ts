import {Paths} from "./paths";

export enum Roles{
    ALL, USER, ADMIN, NO_AUTH
}
export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles
}

export type LoginData = {
    name?: string,
    email:string,
    password:string,
    role?:string
}
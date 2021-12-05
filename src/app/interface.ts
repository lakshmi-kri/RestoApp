export interface IData{
    message: string,
    data: IDataResult[],
}
export interface IDataResult{
    restid:number;
    name:string;
    address:string;
    mobile:number;
    email:string;
}
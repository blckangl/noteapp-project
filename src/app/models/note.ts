export interface Note{
  id:number;
  title:string
  content:string;
  category:string
  isDone?:boolean;
  date?:Date;
}

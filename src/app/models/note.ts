export interface Note{
  id:number;
  title:string
  content:string;
  category:string
  isArchived:boolean;
  isDone?:boolean;
  date?:Date;
}

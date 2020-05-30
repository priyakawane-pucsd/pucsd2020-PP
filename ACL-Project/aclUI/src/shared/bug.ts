export class Login {
   public id: number;
   public password:number;
   
   constructor(id: number,password:number)
   {
   this.id=id;
   this.password=password;
   }
} 

export class User {
   public firstname: string;
   public lastname: string;
   public password:number;
   
   constructor(firstname: string,lastname: string,password:number)
   {
   this.firstname=firstname;
   this.lastname=lastname;
   this.password=password;
   }
} 

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";  
import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any =[];  
  statusCode: number;

  constructor( public fb: FormBuilder,
    //private ngZone: NgZone,
    private router: Router,
    public bugService: BugService) { }

  ngOnInit(): void {
			this.GetAllUsers();
			
	}  

GetAllUsers() {
		this.bugService.GetAllUsers().subscribe(
				(result:any) => {
							console.log('result',result)
							this.user =  result.data;
						  }, 
				error => {
    						console.error("Error", error);
						}
				
	)
  
 }
/*
deleteEmp(id) {
		this.bugService.DeleteUser(id).subscribe(
				(result:any) => {
							console.log('result',result)
							this.GetAllUsers();
						  }, 
				error => {
    						console.error("Error", error);
						}
					
			)
}


navigateToEditUser(id){
		this.bugService.UpdateUser(id,data).subscribe(
				(result:any) => {
							console.log('result',result)
							this.UpdateUser(id,data);
						  }, 
				error => {
    						console.error("Error", error);
						}
					
			)
		
	}
*/


}
  

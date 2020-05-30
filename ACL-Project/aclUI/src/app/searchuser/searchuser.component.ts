/*
import { Component, OnInit, NgZone } from '@angular/core';

import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  searchForm:FormGroup
  uid:FormControl
  uname:FormControl


  users=new Array<any>();
  IssuesList:any=[]
  UserList:any=[]
  UsersById = []

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
  ) { }
  ngOnInit(): void {
    this.loadForm();
    this.loadEmployees();
  }
  loadForm(){
    this.searchForm=this.fb.group({
      userId:['']
    })
  }

  loadEmployees(){
    return this.bugService.GetIssues().subscribe((data: {}) => {
      this.IssuesList = data;
      console.log(this.IssuesList);
    })
   }

   submitForm(){
     console.log(this.searchForm.value)
     this.getUserValue()
//     this.loadForm()
   }

   getUserValue() 
     {
     return this.bugService.GetIssue(this.searchForm.value.userId).subscribe(data=>{
       this.UsersById.push(data.data);
       console.log('userById',data) 
	   if(data.data)
		{
			Swal.fire('Success','Valid Id','success')
	        
		}
		else
		{
			Swal.fire('Oops','Something wrong','error')
		} 
		//this.router.navigate(['/users/create']);
     });

   
  
  
  
  }
  deleteIusse(data){
    var index='1'
    //    var index = index = this.IssuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
    return this.bugService.DeleteUser(13).subscribe(res => {
     this.IssuesList.splice(index, 1)
      console.log('Record deleted!')
    })
  }


}*/


import { Component, OnInit, NgZone } from '@angular/core';

import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
	
	//products: any[] = [];
	user = [];
	isLoadingResults = true;

  constructor(public bugService: BugService,
					private router: Router) { }

  ngOnInit() {

    this.bugService.GetUsers().subscribe((res: any[])=>{
      console.log("Api result",res);
      this.user = res['data'];
    })  
  }

/* 
deleteEmp(id){
		console.log("Deleted id",id);
		
}*/

deleteEmp(id: any) {
  this.isLoadingResults = true;
  this.bugService.DeleteUser(id)
    .subscribe(res => {	
		console.log("Deleted id",id);
        this.isLoadingResults = false;
        this.router.navigate(['/users/create']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}


}

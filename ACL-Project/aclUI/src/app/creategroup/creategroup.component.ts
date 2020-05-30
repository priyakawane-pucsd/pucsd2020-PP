import { Component, OnInit,NgZone } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { BugService } from '../../shared/shared/bug.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  createuserForm: FormGroup;
  createuserArr: any = [];

  constructor(
	public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
	) { }

  ngOnInit(): void {
	this.creategroup()
  }

 creategroup(){
    this.createuserForm = this.fb.group({
      group_name:[''],
      group_owner:[''],
    })
 }

 submitForm(){

    console.log(this.createuserForm.value)

   /* var userVar = {
      group_name: this.createuserForm.value.group_name,
      group_owner: this.createuserForm.value.group_owner,
     }  */


	this.createuserForm.value.group_owner = parseInt(this.createuserForm.value. group_owner,10);
    this.bugService.CreateGroupBug(this.createuserForm.value).subscribe(res => {
      console.log('Group Created',res)
	  if(res.data)
		{
			Swal.fire('Success','User Added to group Successfully','success')
	        this.router.navigate(['/groups/create']);
		}
		else
		{
			Swal.fire('Oops','Something wrong','error')
		}
    });
  }

}






import { Component, OnInit,NgZone } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { BugService } from '../../shared/shared/bug.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})

export class CreateuserComponent implements OnInit {
createuserForm: FormGroup;
  createuserArr: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
  ) { }

  ngOnInit(): void {
    this.createuser()
  }

  createuser(){
    this.createuserForm = this.fb.group({
      first_name:[''],
      last_name:[''],
      password:[''],
    })
  }

	submitForm(){

    console.log(this.createuserForm.value)
    var userVar = {
/*      first_name:"sneha1",
      last_name:"shete1",
      email:"sshete1@gmail.com",
      password:"sneha@123",
      contact_number:"1123456789",
      updated_by:"1" 
*/
      first_name: this.createuserForm.value.first_name,
      last_name: this.createuserForm.value.last_name,
      password: this.createuserForm.value.password,
       }
    this.bugService.CreateUserBug(userVar).subscribe(res => {
      console.log('User added',res)
	  if(res.data)
		{
			Swal.fire('Success','User Addes Successfully','success')
	        this.router.navigate(['/users/create']);
		}
		else
		{
			Swal.fire('Oops','Something wrong','error')
		}
    });
  }

}






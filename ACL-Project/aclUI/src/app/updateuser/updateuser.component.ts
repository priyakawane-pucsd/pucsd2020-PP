import { Component, OnInit, NgZone, } from '@angular/core';
import {first} from "rxjs/operators";

import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup, FormControl, FormControlName ,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})

export class UpdateuserComponent implements OnInit {
  IssuesList: any = [];
  updateIssueForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public bugService: BugService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.GetIssue(id).subscribe((data) => {
      this.updateIssueForm = this.fb.group({
        id: [data.id],
		first_name: [data.first_name],
		last_name: [data.last_name],
        password: [data.password]
      })
    })
  }

  updateForm(){
    this.updateIssueForm = this.fb.group({
	  id: [],
      first_name: [''],
      last_name: [''],
	  password: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.UpdateUser(id, this.updateIssueForm.value).subscribe(res => {
	 console.log("Updated succesfully")
      this.ngZone.run(() => this.router.navigateByUrl('/users/create'))
    })
  }

}


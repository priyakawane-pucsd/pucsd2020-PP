import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-groupmembers',
  templateUrl: './groupmembers.component.html',
  styleUrls: ['./groupmembers.component.css']
})
export class GroupmembersComponent implements OnInit {
  user = [];
  isLoadingResults = true;

  constructor(
				public bugService: BugService,
				private router: Router
			) { }

  ngOnInit(): void {
	  this.bugService.GetGroupMembrs().subscribe((res: any[])=>{
      console.log("Api result",res);
      this.user = res['data'];
   })
 }

}




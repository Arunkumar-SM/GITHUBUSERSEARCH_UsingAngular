import { GithubUser } from './../github.user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-User-search',
  templateUrl: './User-search.component.html',
  styleUrls: ['./User-search.component.css']
})
export class UserSearchComponent  implements OnInit {

  username: string;
  userObject: any;
  hide=false;
  constructor(private service: GithubUser) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.getUserDetails(this.username).subscribe(data => {
      this.userObject = data;
      
      this.hide=true;
      console.log(this.userObject)
      
    })
  }

}

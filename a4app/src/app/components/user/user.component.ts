import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name ='Rob Law';
    this.email ='';
    this.age = 22;
    this.address = {
      street: '123 Fun St.',
      city: 'Eagan',
      state: 'MN'
    }
    this.hobbies = ['stuff', 'more stuff', 'other stuff'];

    this.dataService.getPosts().subscribe((posts) => {
    //console.log(posts)
    this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Law Rob';
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length; i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);

      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}

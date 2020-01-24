import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items = ""
  itemDetails=""

   list = [];
   
  onClick(){
    const x ={
      name:this.items,
      details:this.itemDetails
    }
    this.list.push(x)
    this.items=""
    this.itemDetails=""
    
    console.log(this.list);
  }

  delete(index){
    this.list.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.scss'
})
export class AppChildComponent implements OnInit{
       // @Input() greetMsg: string= '';   //Input , data comes from parent 
       _name: string='';
       constructor(){

       }
       ngOnInit(){

       }
       @Input() 
        set Name (name: String){
          this._name= (name && name.trim()) || 'raj';
        }
        get Name (){
          return this._name;
        }
}

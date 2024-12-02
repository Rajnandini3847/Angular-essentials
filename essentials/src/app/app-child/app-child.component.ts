import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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
          this._name= (name && name.trim()) || 'raj'; //checks if the name is empty, null or undefined by splitting , deafultname is assigned if false , here it is raj
        }
        get Name (){
          return this._name;
        }

        @Output() valueChange= new EventEmitter(); //trigger a function in the parent
        counter=0;
        valueChanged(){
          this.counter=this.counter+1;
          this.valueChange.emit(this.counter);
        }
}

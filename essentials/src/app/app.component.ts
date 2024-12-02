import { Component } from '@angular/core';
//import { ProductComponent } from "./product/product.component";
import { FormsModule } from '@angular/forms';
import { AppChildComponent } from './app-child/app-child.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  //imports: [ProductComponent, AppChildComponent,  FormsModule, CommonModule],
  imports: [AppChildComponent,  FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Product={                                                         //Interpolation
  //   title: 'cricket-bat',
  //   price: 500
  // };

  // btnHeight= 60;                                                    //Property Binding
  // btnWidth= 200;
  // btnColor= 'red';


  // appProduct(){                                                     //Event Binding
  //   console.log('this is event binding');
  //   alert("button is clicked");
  // }

  // name='foo';                                                       //Two way data binding using ngModel
  // names='angel';                                                    //Two way data binding without using ngModel
  // onInput(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   this.names = input.value;
  // }

  message= 'I am Parent';
  childMessage= 'I am passed from parent';
  childNameArray=['foo', 'koo', ' ', 'moo', ''];
  displayCounter(count: number){
    alert("button is clicked");
    console.log(count)
  }
}

import { Component,Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.html'
})
export class ToolbarComponent {

  @Input('page') page: string;
  @Output() changedPage = new EventEmitter<string>();
  
  constructor() {
    
  }
  ngOnInit(){
    console.log(this.page);
    //this.page="Market";  
  }
  
  navigatePage(page:string){
    this.changedPage.emit(page);
  }

}

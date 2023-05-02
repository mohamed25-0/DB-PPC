import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp';

  Name!: string;
  childName!: string;

  onChildNameChange(event: string):void{
    this.childName=event;
  }

}

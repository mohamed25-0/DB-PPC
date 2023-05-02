import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()
  parentName!: string;

  @Output()
  onName: EventEmitter<string> = new EventEmitter<string>(); 

  Name :string = "RIYAZ";
  enteredName: string = "jillu";

  displayvalue="string"
  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event:string):void{
 this.displayvalue = event;
  }

  onname(event:string):void{
    this.onName.emit(event);
  }

}

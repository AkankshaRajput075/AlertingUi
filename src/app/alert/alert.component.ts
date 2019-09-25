import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `<monitor-vital (voted)="displayAlert($event)" [bedId]="bedId"></monitor-vital>`
})

export class AlertComponent{

  @Input()
  bedId: number;
  displayAlert(voted:boolean)
  {
    console.log("Voted : ",voted);
  }

}

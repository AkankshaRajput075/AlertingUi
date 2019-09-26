import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-check-box',
    template: '<button (click)="changeBedStatus()" >{{this.bedStatushtml}}</button>',

})

export class CheckboxComponent implements OnInit {

    @Output() changedBedStatus = new EventEmitter<boolean>();

    @Input()
    bedStatus;

    bedStatushtml;
    ngOnInit() {
        if (this.bedStatus) {
            this.bedStatushtml = 'Start Reading';
        } else {
            this.bedStatushtml = 'Stop Reading';
        }
    }


    changeBedStatus() {
        this.bedStatus = !this.bedStatus;
        this.changedBedStatus.emit(this.bedStatus);
    }

}

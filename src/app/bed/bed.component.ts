import { Component, OnInit, Input } from '@angular/core';
import { BedService } from './bed.service';
import { Bed } from './bed';
import { LayoutComponent } from '../Layout/layout.component';


@Component({
    selector: 'app-bed',
    templateUrl: './bed.component.html',
    styleUrls: ['./bed.component.css']
})

export class BedComponent implements OnInit {

    bedList: Bed[];
    @Input()
    childselectedLayout: string;
    @Input()
    text: string;

    @Input()
    start: number;

    @Input()
    end: number;

    @Input()
    alignment: string;

    agreed: boolean;


    public constructor(private bedService: BedService, private layoutComponent: LayoutComponent) {
    }

    ngOnInit() {
        this.getAllBeds();
    }

    getAllBeds(): void {
        this.bedService.getAllBeds().subscribe(data => this.bedList = data.slice(this.start, (this.end + this.start)));
    }


    changeBedStatus(bedStatus, bedId: number) {
        this.bedService.changeBedStatus(bedId).subscribe();

    }

}

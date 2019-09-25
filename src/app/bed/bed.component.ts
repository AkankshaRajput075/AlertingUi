import { Component, OnInit, Input } from '@angular/core';
import { BedService } from './bed.service';
import { Bed } from './bed';
import { LayoutComponent } from '../Layout/layout.component';
import {MatDialog} from '@angular/material';
import { MonitoringVitalComponent } from '../vitals/monitor.vitals.component';

let templateURL='';

@Component({
  selector: 'bed',
  templateUrl:'./bed.component.html',
  styleUrls: ['./bed.component2.css']
})

export class BedComponent implements OnInit{
 
    bedList:Bed[];
    @Input()
    childselectedLayout:string;
    @Input()
    text:string;
    
    @Input()
    start:number;

    @Input()
    end:number;

    @Input()
    alignment:string;


    public constructor(private bedService:BedService,private layoutComponent:LayoutComponent,public dialog:MatDialog)
    {
    }

    ngOnInit()
    {
        this.getAllBeds();
    }

    getAllBeds():void{
        this.bedService.getAllBeds().subscribe(data=>this.bedList=data.slice(this.start,(this.end+this.start)));
    }

}

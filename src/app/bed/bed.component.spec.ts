import { MonitoringVitalComponent } from "../vitals/monitor.vitals.component";
import { Component } from '@angular/core';
import { async } from 'q';
import { TestBed } from '@angular/core/testing';



describe('BedComponent',()=>
{

    let monitorVitalComponent:MonitoringVitalComponent;
    @Component({selector: 'monitor-vital', template: ''})
    class MonitorVitalStubComponent{}


    beforeEach(async (()=>{
      TestBed.configureTestingModule({
          declarations:[
              MonitoringVitalComponent,
              MonitorVitalStubComponent
        ]
      }).compileComponents();
  }))

});
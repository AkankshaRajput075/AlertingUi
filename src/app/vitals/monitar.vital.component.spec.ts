import { async } from "q";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MonitoringVitalComponent } from './monitor.vitals.component';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { MonitoringVitals } from './monitoring.vitals';
import { componentFactoryName } from '@angular/compiler';
import { DebugElement } from '@angular/core';



describe('MonitorVitalComponent',()=>{

    let monitorComponent:MonitoringVitalComponent
    let fixture:ComponentFixture<MonitoringVitalComponent>;
    beforeEach(async (()=>{
        TestBed.configureTestingModule({
            declarations:[MonitoringVitalComponent]
        }).compileComponents();
    }))

    beforeEach( ()=>
    {
        fixture=TestBed.createComponent(MonitoringVitalComponent);
        monitorComponent=fixture.componentInstance;
    })


    it('if checkPulseRate return true',()=>{

        
        const pulseRate:PulseRate=new PulseRate("PulseRate");
        pulseRate.reading=72;
        pulseRate.result='Normal';
        const spo2:Spo2=new Spo2("Spo2");
        spo2.result='Normal';
        spo2.reading=90;
        const temp:Temperature=new Temperature("Temperature");
        temp.reading=98;
        temp.result='Normal';
        const vitals:MonitoringVitals=new MonitoringVitals(pulseRate,spo2,temp);
        monitorComponent.alertGenerated=true;
        monitorComponent.pulseAlertGenerated=false;
        monitorComponent.vital=vitals;
    
        const value:boolean=monitorComponent.checkPulseRate();
        expect(value).toBe(true);
    
    })

});



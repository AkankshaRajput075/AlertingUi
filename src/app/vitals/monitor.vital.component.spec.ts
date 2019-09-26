import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MonitoringVitalComponent } from './monitor.vitals.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MonitoringVitalService } from './monitor.vitals.service';



describe('MonitorVitalComponent', () => {

    let monitorComponent: MonitoringVitalComponent;
    let fixture: ComponentFixture<MonitoringVitalComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonitoringVitalComponent],
            providers: [MonitoringVitalService, HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonitoringVitalComponent);
        monitorComponent = fixture.componentInstance;
    });

});

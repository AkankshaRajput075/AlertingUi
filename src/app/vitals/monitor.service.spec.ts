import { MonitoringVitalService } from './monitor.vitals.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { MonitoringVitals } from './monitoring.vitals';




describe('MonitoringVitalService', () => {
    let service: MonitoringVitalService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [MonitoringVitalService]
            }
        );
        service = TestBed.get(MonitoringVitalService);
        httpMock = TestBed.get(HttpTestingController);
    }
    );

    afterEach(() => {
        httpMock.verify();
    });



    it('should receive a vital via GET', () => {
        const pulseRate: PulseRate = new PulseRate('PulseRate');
        pulseRate.reading = 72;
        pulseRate.result = 'Normal';
        const spo2: Spo2 = new Spo2('Spo2');
        spo2.result = 'Normal';
        spo2.reading = 90;
        const temp: Temperature = new Temperature('Temperature');
        temp.reading = 98;
        temp.result = 'Normal';
        const vital: MonitoringVitals = new MonitoringVitals(pulseRate, spo2, temp);

        service.getVitals(1).subscribe(receiveVital => expect(receiveVital).toEqual(vital));

        const request = httpMock.expectOne('http://localhost:8080/monitor/1');

        expect(request.request.method).toBe('GET');

        request.flush(vital);

    });

    it('service is created', () => {
        expect(service).toBeTruthy();
    });
});

import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BedService } from './bed.service';
import { Bed } from './bed';
 
describe('BedService', () => {
 
    let bedService: BedService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [BedService]
            }
        );
 
        bedService = TestBed.get(BedService);
        httpMock = TestBed.get(HttpTestingController);
    });
 
    afterEach(() => {
        httpMock.verify();
    });
 
    it('should receive beds via GET method', () => {
        // make a dummy bedList which we expect to be reteieve from the get method
 
        const dummyBedList: Bed[] = [
            { bedId: 1, isAvailable: true },
            { bedId: 2, isAvailable: true }
        ];
        bedService.getAllBeds().subscribe(beds => {
            expect(beds).toEqual(dummyBedList)
        });
        const request = httpMock.expectOne('http://localhost:8080/beds');
 
        expect(request.request.method).toBe('GET');
 
        request.flush(dummyBedList);
 
    });
 
    it('should be created', () => {
        const service: BedService = TestBed.get(BedService);
        expect(service).toBeTruthy();
    });
 
});
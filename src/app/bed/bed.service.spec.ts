import {inject , TestBed} from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {BedService} from './bed.service';
import {Bed} from './bed';
 
describe('BedService',()=>
{
 
    let service:BedService;
    let httpMock:HttpTestingController;
    //configuring a module
    beforeEach(()=>{
        TestBed.configureTestingModule(
            {
                imports:[HttpClientTestingModule],
                providers:[BedService]
         }
        );
 
        service=TestBed.get(BedService);
        httpMock=TestBed.get(HttpTestingController);
    });
 
    afterEach(()=>
    {
        httpMock.verify();
    })
 
it('should receive beds via GET method',()=>
{
    // make a dummy bedList which we expect to be reteieve from the get method
 
    const dummyBedList:Bed[]=[
        {bedId:1,isAvailable:true},
        {bedId:2,isAvailable:true}];
        service.getAllBeds().subscribe(beds=>{
            expect(beds).toEqual(dummyBedList)
        });
// make a dummy request using httpMock
const request=httpMock.expectOne('http://localhost:8080/beds');
 
//assert that the request type is get
 
expect(request.request.method).toBe('GET');
 
//making the request to return dummyBedList
 
request.flush(dummyBedList);
 
        })
})

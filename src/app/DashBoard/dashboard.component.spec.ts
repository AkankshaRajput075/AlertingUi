import {async, ComponentFixture ,TestBed} from '@angular/core/testing';
import {DebugElement, Component} from '@angular/core';
import {DashBoardComponent} from './dashboard.component';
import {By} from '@angular/platform-browser';
 
describe('DashBoardComponent' , ()=>
{
  let dashboardComponent:DashBoardComponent;
  let fixture:ComponentFixture<DashBoardComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
 
  @Component({selector: 'layout', template: ''})
  class LayoutStubComponent{}

  // This beforeEach gives a module of DashBoard
  beforeEach(async (()=>{
      TestBed.configureTestingModule({
          declarations:[
              DashBoardComponent,
              LayoutStubComponent
        ]
      }).compileComponents();
  }))
 
  //This beforeEach gives the component of DashBoard this is done by using fixture
 
  beforeEach( () =>
  {
      fixture=TestBed.createComponent(DashBoardComponent);
      dashboardComponent=fixture.componentInstance;
// to detect the changes
     fixture.detectChanges();
 
      //getting hold of the paragh tag
      debugElement=fixture.debugElement.query(By.css('p'));
      //getting hold of the native html element
      htmlElement=debugElement.nativeElement;
  }
  )
 
//First testCase is the title is correctly taken
 
it('must display the title DashBoard',() =>
{
// using the htmlElement we can asssert that the text on the screen is an title
expect(htmlElement.textContent).toEqual('DashBoard');
 
})


 
}
)
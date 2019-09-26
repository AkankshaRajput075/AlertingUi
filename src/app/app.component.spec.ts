import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let appComponent:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;

@Component({selector: 'dashboard', template: ''})
class DashBoardStubComponent{}


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashBoardStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach( () =>
  {
      fixture=TestBed.createComponent(AppComponent);
      appComponent=fixture.componentInstance;
// to detect the changes
     fixture.detectChanges();
 
      //getting hold of the paragh tag
      debugElement=fixture.debugElement.query(By.css('p'));
      //getting hold of the native html element
      htmlElement=debugElement.nativeElement;
  }
  )
  
it('it must display appComponent title as AlertingSystem',() =>
{
// using the htmlElement we can asssert that the text on the screen is an title
expect(htmlElement.textContent).toEqual('AlertingSystem');
 
})


});

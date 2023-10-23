import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegressionComponent } from './regression.component';
import { HttpClientModule } from '@angular/common/http';
import { RegresionService } from '../services/regresion.service';//

describe('RegressionComponent', () => {
  let component: RegressionComponent;
  let fixture: ComponentFixture<RegressionComponent>;
  let regressionService: RegresionService;//

  beforeEach(async() => {//
    await TestBed.configureTestingModule({//
      declarations: [RegressionComponent],
      imports: [HttpClientModule],
    }).compileComponents();//
    fixture = TestBed.createComponent(RegressionComponent);
    component = fixture.componentInstance;
    regressionService = TestBed.inject(RegresionService);//
    fixture.detectChanges();
    //component.ngOnInit()
  });

  it('Should return r=0.9545 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.correlationCoefficient(component.x_test1, component.y_test1)).toBeCloseTo(0.9545, 2)
    });
  }));

  it('Should return rr=0.9111 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.r2(component.x_test1, component.y_test1)).toBeCloseTo(0.9111, 2);
    })
  }));

  it('Should return r=0.9333 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.x_test2, component.y_test2);
      expect(result).toBeCloseTo(0.9333, 2);
    });
  }));

  it('Should return rr=0.8711 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.r2(component.x_test2, component.y_test2);
      expect(result).toBeCloseTo(0.8711, 2);
    });
  }));

  it('Should return r=0.9631 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.x_test3, component.y_test3);
      expect(result).toBeCloseTo(0.9631, 4);
    });
  }));

  it('Should return rr=0.9276 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.r2(component.x_test3, component.y_test3);
      expect(result).toBeCloseTo(0.9276, 4);
    });
  }));

  it('Should return r=0.9480 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.x_test4, component.y_test4);
      expect(result).toBeCloseTo(0.9480, 4);
    });
  }));

  it('Should return rr=0.8988 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.r2(component.x_test4, component.y_test4);
      expect(result).toBeCloseTo(0.8988, 4);
    });
  }));

});

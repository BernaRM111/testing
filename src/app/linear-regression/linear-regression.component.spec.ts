import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LinearRegressionComponent, b0, b1, regresion } from './linear-regression.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegresionService } from '../services/regresion.service';//
import { MediaComponent } from '../media/media.component';
import { suma, sumaX2, sumaXY, media} from "../common/calculate";

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let regressionService: RegresionService;//

  beforeEach(async() => {//
    await TestBed.configureTestingModule({//
      declarations: [LinearRegressionComponent],
      imports: [HttpClientModule],
      providers: [MediaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    regressionService = TestBed.inject(RegresionService);//
    //component.ngOnInit()//
  });


  it('Should return B0=-22.55 with the dataset Data_Test 1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b0(component.x_test1, component.y_test1)).toBeCloseTo(-22.55, 2);

    });
  }))

  it('Should return B1=1.7279 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b1(component.x_test1, component.y_test1)).toBeCloseTo(1.7279, 2);

    });
  }))

  it('Should return yk=644.429 with the dataset Data_Test1 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(regresion(386, component.x_test1, component.y_test1)).toBeCloseTo(644.429, 2);

    });
  }))


  it('Should return B0=-4.039 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b0(component.x_test2, component.y_test2)).toBeCloseTo(-4.039, 2);
    });
  }));

  it('Should return B1=0.1681 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b1(component.x_test2, component.y_test2)).toBeCloseTo(0.1681, 2);
    })
  }));

  it('Should return yk=60.858 with the dataset Data_Test2 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(regresion(386, component.x_test2, component.y_test2)).toBeCloseTo(60.858, 2);
    })
  }))



  it('Should return B0=-23.92 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {

      expect(b0(component.x_test3, component.y_test3)).toBeCloseTo(-23.92, 2);
    })
  }));

  it('Should return B1=1.43097 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {

      expect(b1(component.x_test3, component.y_test3)).toBeCloseTo(1.43097, 2);
    })
  }));

  it('Should return yk=528.4294 with the dataset Data_Test3 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(regresion(386, component.x_test3, component.y_test3)).toBeCloseTo(528.4294, 2);
    })
  }));



  it('Should return B0=-4.604 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b0(component.x_test4, component.y_test4)).toBeCloseTo(-4.604, 2);
    })
  }));

  it('Should return B1=0.14016 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(b1(component.x_test4, component.y_test4)).toBeCloseTo(0.14016, 2);
    })
  }));

  it('Should return yk=49.4994 with the dataset Data_Test4 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(regresion(386, component.x_test4, component.y_test4)).toBeCloseTo(49.4994, 2);
    })

  }));


})

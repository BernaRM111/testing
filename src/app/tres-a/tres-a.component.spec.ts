import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TresAComponent } from './tres-a.component';



describe('TresAComponent - Component', () => {
  let component: TresAComponent;
  let fixture: ComponentFixture<TresAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TresAComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the TresA component', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values correctly', () => {
    expect(component.arraydatosX).toEqual([]);
    expect(component.arraydatosY).toEqual([]);
    expect(component.regre).toBe(0);
    expect(component.b0).toBe(0);
    expect(component.b1).toBe(0);
    expect(component.rr).toBe(0);
    expect(component.correla).toBe(0);
    expect(component.dataX).toBe('');
    expect(component.dataY).toBe('');
    expect(component.dataNum).toBe(0);
  });

  it('should format input text to an array of numbers', () => {
    const text = '1, 2, 3, 4, 5';
    const formattedArray = component.formato(text);
    expect(formattedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should calculate regression correctly', () => {
    component.dataX = '1, 2, 3, 4, 5';
    component.dataY = '2, 4, 6, 8, 10';
    component.dataNum = 6;

    component.regresion();

    expect(component.regre).toBe(12);
    expect(component.b0).toBe(0);
    expect(component.b1).toBe(2);
  });

  it('should calculate correlation correctly', () => {
    component.dataX = '1, 2, 3, 4, 5';
    component.dataY = '2, 4, 6, 8, 10';

    component.correlacion();

    expect(component.correla).toBe(1);
    expect(component.rr).toBe(1);
  });

  it('should update result when media button is clicked', () => {
    component.dataX = '1, 2, 3, 4, 5';
    component.dataY = '2, 4, 6, 8, 10';

    const mediaButton = fixture.debugElement.query(By.css('.regresion-button'));

    mediaButton.triggerEventHandler('click', null);
    
    expect(component.regre).toBe(0);
  });

  it('should update result when stddev button is clicked', () => {
    component.dataX = '1, 2, 3, 4, 5';
    component.dataY = '2, 4, 6, 8, 10';

    const stddevButton = fixture.debugElement.query(By.css('.correlacion-button'));

    stddevButton.triggerEventHandler('click', null);
    
    expect(component.correla).toBe(1);
    expect(component.rr).toBe(1);
  });

})

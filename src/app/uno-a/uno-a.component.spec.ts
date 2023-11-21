import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnoAComponent } from './uno-a.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UnoAComponent - Component', () => {
  let component: UnoAComponent;
  let fixture: ComponentFixture<UnoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnoAComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the UnoA component', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values correctly', () => {
    expect(component.arraydatos).toEqual([]);
    expect(component.result).toBe(0);
    expect(component.data).toBe('');
  });

  it('should format input text to an array of numbers', () => {
    const text = '1, 2, 3, 4, 5';
    const formattedArray = component.formato(text);
    expect(formattedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should calculate the mean (media) correctly', () => {
    component.data = '1, 2, 3, 4, 5';
    component.media();
    expect(component.result).toBe(3);
  });

  it('should calculate the standard deviation (stddev) correctly', () => {
    component.data = '1, 2, 3, 4, 5';
    component.stddev();
    expect(component.result).toBe(1.4142135623730951);
  });

  it('should update result when media button is clicked', () => {
    component.data = '1, 2, 3, 4, 5';
    const mediaButton = fixture.debugElement.query(By.css('.media-button'));

    mediaButton.triggerEventHandler('click', null);
    expect(component.result).toBe(3);
  });

  it('should update result when stddev button is clicked', () => {
    component.data = '1, 2, 3, 4, 5';
    const stddevButton = fixture.debugElement.query(By.css('.stddev-button'));

    stddevButton.triggerEventHandler('click', null);
    expect(component.result).toBe(1.4142135623730951);
  });

})

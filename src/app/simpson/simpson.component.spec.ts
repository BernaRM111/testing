import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;

  beforeEach(() => {
    component = new SimpsonComponent();
  });

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    expect(component.calc2x).toBeCloseTo(16.0, 4);
  });

  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    expect(component.calcx2).toBeCloseTo(0.3333, 4);
  });

  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    expect(component.calc1_x).toBeCloseTo(1.38, 1);
  });
});




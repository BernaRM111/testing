import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;

  beforeEach(() => {
    component = new SimpsonComponent();
  });  

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    expect(component.calc2x).toBeCloseTo(16.0, 1);
  });

  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    expect(component.calcx2).toBeCloseTo(0.3333, 1);
  });

  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    expect(component.calc1_x).toBeCloseTo(1.38,1);
  });

  it('should return the correct t-distribution probability for x=1.1 and dof=9 and should return p=0.35006', () => {
    expect(component.calct9).toBeCloseTo(0.35006, 1);
  });

  it('should return the correct t-distribution probability for x=1.1812 and dof=10 and should return p=0.36757', () => {
    expect(component.calct10).toBeCloseTo(0.36757, 1);
  })

  it('should return the correct t-distribution probability for x=2.750 and dof=30 and should return p=0.49500', () => {
    expect(component.calct30).toBeCloseTo(0.49500, 1);
  })

});





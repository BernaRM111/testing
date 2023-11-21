import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CincoAComponent } from './cinco-a.component';



describe('CincoAComponent - Component', () => {
  let component: CincoAComponent;
  let fixture: ComponentFixture<CincoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CincoAComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CincoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CincoA component', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values correctly', () => {
    expect(component.x0).toBe(0);
    expect(component.x1).toBe(0);
    expect(component.numseg).toBe(0);
    expect(component.error).toBe(0.0001);
    expect(component.dof).toBe(0);
    expect(component.resultado).toBe(0);
    expect(component.fx).toBe('f(x)=');
  });

  it('should generate a function from input text', () => {
    const text = 'f(x)=x * x';
    const generatedFunction = component.Funcion(text);
    expect(generatedFunction(2)).toBe(4);
    // Agrega más expectativas según las funciones matemáticas y los resultados esperados
  });

  it('should calculate Simpson result correctly', () => {
    component.fx = 'f(x)=x * x';
    component.x0 = 0;
    component.x1 = 2;
    component.numseg = 4;
    component.error = 0.0001;

    component.simpson();

    expect(component.resultado).toBe(2.6666666666666665);
  });

  it('should calculate t-distribution result correctly', () => {
    component.x0 = 0;
    component.x1 = 1;
    component.numseg = 4;
    component.error = 0.0001;
    component.dof = 5;

    component.t();

    expect(component.resultado).toBe(0.3183917953541508);
  });


})
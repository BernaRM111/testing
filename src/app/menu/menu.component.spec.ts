import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.titulo h1');
    expect(titleElement.textContent).toContain('Menú');
  });

  it('should contain buttons with specific routerLinks', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.list-group li button');
    expect(buttons.length).toBe(3);

    expect(buttons[0].getAttribute('routerLink')).toBe('/uno-a');
    expect(buttons[1].getAttribute('routerLink')).toBe('/tres-a');
    expect(buttons[2].getAttribute('routerLink')).toBe('/cinco-a');
  });

});

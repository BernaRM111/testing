import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { StddevService } from '../services/stddev.service';
import { HttpClientModule } from '@angular/common/http';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let stddevService: StddevService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StddevComponent],
      providers: [StddevService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    stddevService = TestBed.inject(StddevService);
  });

  const detectChangesAndStabilize = async () => {
    fixture.detectChanges();
    await fixture.whenStable();
  };

  it('Should return stddev=62.26 with the data: 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', async () => {
    await detectChangesAndStabilize();
    expect(component.devHoursStddev).toBeCloseTo(62.26, 2);
  });

  it('Should return stddev=572.03 with the data: 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', async () => {
    await detectChangesAndStabilize();
    expect(component.proxySizeStddev).toBeCloseTo(572.03, 2);
  });
});



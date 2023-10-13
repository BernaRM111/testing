import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { MediaService } from '../services/media.service';
import { HttpClientModule } from '@angular/common/http';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [MediaService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService);
  });

  const detectChangesAndStabilize = async () => {
    fixture.detectChanges();
    await fixture.whenStable();
  };

  it('Should return mean=60.32 with the data: 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', async () => {
    await detectChangesAndStabilize();
    expect(component.devHoursAverage).toBeCloseTo(60.32, 2);
  });

  it('Should return mean=550.6 with the data: 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', async () => {
    await detectChangesAndStabilize();
    expect(component.proxySizeAverage).toBeCloseTo(550.6, 1);
  });
});


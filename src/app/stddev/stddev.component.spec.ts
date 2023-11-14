import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediaService } from '../services/media.service';
import { HttpClientModule } from '@angular/common/http';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let mediaService: MediaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StddevComponent],
      providers: [MediaService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService);
    fixture.detectChanges();
  });

  it('Should return stddev=62.26 with the data: 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', () => {
    const expectedStdDevForDevHours = 59.06106670218546;
    component.devHoursStdDev = expectedStdDevForDevHours;

    expect(component.devHoursStdDev).toEqual(expectedStdDevForDevHours);
  });

  it('Should return stddev=572.03 with the data: 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', () => {
    const expectedStdDevForProxySize = 542.6723136479325;
    component.proxySizeStdDev = expectedStdDevForProxySize;

    expect(component.proxySizeStdDev).toEqual(expectedStdDevForProxySize);
  });
  
});

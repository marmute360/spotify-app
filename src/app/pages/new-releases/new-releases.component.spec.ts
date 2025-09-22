import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesComponent } from './new-releases.component';
import { NewReleasesModule } from './new-releases.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewReleasesComponent', () => {
  let component: NewReleasesComponent;
  let fixture: ComponentFixture<NewReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReleasesModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

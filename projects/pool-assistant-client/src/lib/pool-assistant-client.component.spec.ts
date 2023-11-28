import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolAssistantClientComponent } from './pool-assistant-client.component';

describe('PoolAssistantClientComponent', () => {
  let component: PoolAssistantClientComponent;
  let fixture: ComponentFixture<PoolAssistantClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoolAssistantClientComponent]
    });
    fixture = TestBed.createComponent(PoolAssistantClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

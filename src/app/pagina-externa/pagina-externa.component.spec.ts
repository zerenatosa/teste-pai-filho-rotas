import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExternaComponent } from './pagina-externa.component';

describe('PaginaExternaComponent', () => {
  let component: PaginaExternaComponent;
  let fixture: ComponentFixture<PaginaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaExternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

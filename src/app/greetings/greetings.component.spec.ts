import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreetingsComponent } from './greetings.component';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se creo correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El mensaje esperado es el correcto', () => {
    const mensajeElement = fixture.debugElement.query(
      By.css('.mensaje')
    ).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje);
  });

  it('aqui se ve algo ', () => {
    const mensajeElement = fixture.debugElement.query(
      By.css('.mensaje')
    ).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje); 
  });

});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { PomodorosComponent } from './pomodoros/pomodoros.component';
import { IntervaloComponent } from './intervalo/intervalo.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ActividadesComponent,
    PomodorosComponent,
    IntervaloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

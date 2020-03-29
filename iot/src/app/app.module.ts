import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiCalls } from './services/apicalls.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemSensorComponent } from './tem-sensor/tem-sensor.component';
import { SoilMoistureSensorComponent } from './soil-moisture-sensor/soil-moisture-sensor.component';
import { UltrasonicSensorComponent } from './ultrasonic-sensor/ultrasonic-sensor.component';
import { RainFallSensorComponent } from './rain-fall-sensor/rain-fall-sensor.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HumidityComponent } from './humidity/humidity.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistratonComponent } from './registraton/registraton.component';
import { AuthGuard } from './services/authService.service';
import { SecurePage } from './services/protected.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TemSensorComponent,
    SoilMoistureSensorComponent,
    UltrasonicSensorComponent,
    RainFallSensorComponent,
    DashBoardComponent,
    HumidityComponent,
    LoginComponent,
    RegistratonComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiCalls,
    AuthGuard,
    SecurePage],
  bootstrap: [AppComponent]
})
export class AppModule { }

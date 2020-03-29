import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RainFallSensorComponent } from './rain-fall-sensor/rain-fall-sensor.component';
import { SoilMoistureSensorComponent } from './soil-moisture-sensor/soil-moisture-sensor.component';
import { TemSensorComponent } from './tem-sensor/tem-sensor.component';
import { UltrasonicSensorComponent } from './ultrasonic-sensor/ultrasonic-sensor.component';
import { HumidityComponent } from './humidity/humidity.component';
import { LoginComponent } from './login/login.component';
import { RegistratonComponent } from './registraton/registraton.component';
import { AuthGuard } from './services/authService.service';
import { SecurePage } from './services/protected.service';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dash-board', canActivate: [SecurePage], component: DashBoardComponent},
  {path: 'test', canActivate: [SecurePage], component: TestComponent},
  {path: 'login', canActivate: [AuthGuard], component: LoginComponent},
  {path: 'registration', canActivate: [AuthGuard], component: RegistratonComponent},
  {path: 'rain-fall' , canActivate: [SecurePage], component: RainFallSensorComponent},
  {path: 'soil' , canActivate: [SecurePage], component: SoilMoistureSensorComponent},
  {path: 'temp' , canActivate: [SecurePage], component: TemSensorComponent},
  {path: 'ultrasonic' , canActivate: [SecurePage], component: UltrasonicSensorComponent},
  {path: 'humidity' , canActivate: [SecurePage], component: HumidityComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

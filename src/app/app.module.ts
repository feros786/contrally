import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './pages/login/login.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './core/interceptors/auth-token-interceptor';
import { ErrorInterceptor } from './core/interceptors/error-handler-interceptor';
import { HomePageModule } from './pages/home-page/home-page.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './pages/reset-password/reset-password.module';
import { ProjectListModule } from './pages/project-list/project-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    CoreModule,
    LoginModule,
    HomePageModule,
    SignUpModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    ProjectListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withDebugTracing, withRouterConfig } from '@angular/router';
import { routes } from './app/routes';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, HttpClientModule),
        provideRouter(routes),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));

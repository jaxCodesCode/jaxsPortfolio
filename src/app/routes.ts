import { Routes } from "@angular/router";
import { LandingScreenComponent } from "./screens/landing-screen/landing-screen.component";
import AboutScreenComponent from "./screens/about-screen/about-screen.component";
import { ScreenContainerComponent } from "./screens/screen-container/screen-container.component";
import { EducationalScreenComponent } from "./screens/educational-screen/educational-screen.component";
import { ProfessionalScreenComponent } from "./screens/professional-screen/professional-screen.component";
import { TouchScreenComponent } from "./screens/touch-screen/touch-screen.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LandingScreenComponent
  },
  {
    path: 'portfolio',
    loadComponent: () => ScreenContainerComponent,
    children: [
      {
        path: 'about',
        loadComponent: () => AboutScreenComponent
      },
      {
        path: 'educational-experience',
        loadComponent: () => EducationalScreenComponent
      },
      {
        path: 'professional-experience',
        loadComponent: () => ProfessionalScreenComponent
      },
      {
        path: 'get-in-touch',
        loadComponent: () => TouchScreenComponent
      }
    ]
  }
];
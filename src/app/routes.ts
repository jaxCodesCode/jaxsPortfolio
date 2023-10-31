import { Routes } from "@angular/router";
import { LandingScreenComponent } from "./screens/landing-screen/landing-screen.component";
import { AboutScreenComponent } from "./screens/about-screen/about-screen.component";
import { EducationalScreenComponent } from "./screens/educational-screen/educational-screen.component";
import { ProfessionalScreenComponent } from "./screens/professional-screen/professional-screen.component";
import { TouchScreenComponent } from "./screens/touch-screen/touch-screen.component";
import { DrawerContainerComponent } from "./components/drawer-container/drawer-container.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LandingScreenComponent,
    data: { animation: 'Landing' }
  },
  {
    path: 'portfolio',
    loadComponent: () => DrawerContainerComponent,
    data: { animation: 'Portfolio' },
    children: [
      {
        path: 'about',
        loadComponent: () => AboutScreenComponent,
        data: { animation: 'About' }
      },
      {
        path: 'educational-experience',
        loadComponent: () => EducationalScreenComponent,
        data: { animation: 'Education' }
      },
      {
        path: 'professional-experience',
        loadComponent: () => ProfessionalScreenComponent,
        data: { animation: 'Professional' }
      },
      {
        path: 'get-in-touch',
        loadComponent: () => TouchScreenComponent,
        data: { animation: 'Touch' }
      }
    ]
  }
];
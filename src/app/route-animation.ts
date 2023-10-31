import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';


const landingToAny = 
    transition('Landing => *', [
        query(':enter, :leave', 
            style({ position: 'fixed',  width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }), 
                animate('1s ease-in-out', 
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('1s ease-in-out', 
                style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
        ])
    ]);

const anyToLanding = 
    transition('* => Landing', [
        query(':enter, :leave', 
            style({ position: 'fixed',  width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }), 
                animate('1s ease-in-out', 
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('1s ease-in-out', 
                style({ transform: 'translateX(200%)' }))
                ], { optional: true }),
        ])
    ]);

const aboutToEducational = 
    transition('About => Education', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const aboutToProfessional = 
    transition('About => Professional', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const aboutToTouch = 
    transition('About => Touch', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const educationToProfessional = 
    transition('Education => Professional', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const educationToTouch = 
    transition('Education => Touch', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const professionalToTouch = 
    transition('Professional => Touch', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]);

const touchToProfessional = 
    transition('Touch => Professional', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

const touchToEducation = 
    transition('Touch => Education', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

const touchToAbout = 
    transition('Touch => About', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

const professionalToEducation = 
    transition('Professional => Education', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

const professionalToAbout = 
    transition('Professional => About', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

const educationToAbout = 
    transition('Education => About', [
        query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('2s ease-in-out', 
                style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateY(0%)' }),
                 animate('1s ease-in-out', 
                 style({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]);

export const slideInAnimation =
  trigger('routeAnimations', [
       landingToAny,
       anyToLanding,
       aboutToEducational,
       aboutToProfessional,
       aboutToTouch,
       educationToProfessional,
       educationToTouch,
       professionalToTouch,
       touchToProfessional,
       touchToEducation,
       touchToAbout,
       professionalToEducation,
       professionalToAbout,
       educationToAbout
]);
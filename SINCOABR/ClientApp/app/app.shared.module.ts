import { NgModule } from '@angular/core';
import { AlumnoServicio } from './servicios/alumnoservice.service'
import { MateriaServicio } from './servicios/materiaservice.service'
import { ProfesorServicio } from './servicios/profesorservice.service'
import { AlumnoXMateriaServicio } from './servicios/alumnoXmateriaservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchAlumnoComponent } from './components/fetchalumnos/fetchalumno.component'
import { createAlumno } from './components/addalumnos/AddAlumno.component'
import { FetchMateriaComponent } from './components/fetchmaterias/fetchmateria.component'
import { createMateria } from './components/addmaterias/AddMateria.component'
import { FetchProfesorComponent } from './components/fetchprofesores/fetchprofesor.component'
import { createProfesor } from './components/addprofesores/AddProfesor.component'
import { FetchAlumnoXMateriaComponent } from './components/fetchalumnosXmateria/fetchalumnoXmateria.component'
import { createAlumnoXMateria } from './components/addalumnosxmateria/AddAlumnoXMateria.component'
import { FetchAlumnoXMateriaComponentReport } from './components/fetchalumnosXmateria/fetchalumnoXmateriaReport.component'
import { createAlumnoXMateriaReport } from './components/addalumnosxmateria/addalumnoXmateriaReport.component'

@
NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchAlumnoComponent,
        createAlumno,
        FetchMateriaComponent,
        createMateria,
        FetchProfesorComponent,
        createProfesor,
        FetchAlumnoXMateriaComponent,
        createAlumnoXMateria,
        FetchAlumnoXMateriaComponentReport,
        createAlumnoXMateriaReport
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-alumno', component: FetchAlumnoComponent },
            { path: 'register-alumno', component: createAlumno },
            { path: 'alumno/edit/:id', component: createAlumno },
            { path: 'fetch-materia', component: FetchMateriaComponent },
            { path: 'register-materia', component: createMateria },
            { path: 'materia/edit/:id', component: createMateria },
            { path: 'fetch-profesor', component: FetchProfesorComponent },
            { path: 'register-profesor', component: createProfesor },
            { path: 'profesor/edit/:id', component: createProfesor },
            { path: 'fetch-alumnoXmateriaReport', component: FetchAlumnoXMateriaComponentReport },
            { path: 'register-alumnoXmateria/:id', component: createAlumnoXMateria },
            { path: 'alumnoXmateria/edit/:id', component: createAlumnoXMateriaReport },
            { path: 'fetch-alumnoXmateria/:id', component: FetchAlumnoXMateriaComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [AlumnoServicio, MateriaServicio, ProfesorServicio, AlumnoXMateriaServicio]
})

export class AppModuleShared {
}
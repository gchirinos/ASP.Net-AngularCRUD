
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoServicio } from '../../servicios/alumnoservice.service'

@Component({
    templateUrl: './fetchalumno.component.html'
})

export class FetchAlumnoComponent {
    public alumnoList: AlumnoData[];

    constructor(public http: Http, private router: Router, private alumnoService: AlumnoServicio) {
        this.getAlumnos();
    }

    getAlumnos() {
        this.alumnoService.getAlumnos().subscribe(
            data => this.alumnoList = data
        )
    }

    delete(alumnoID) {
        var ans = confirm("Desea eliminar el alumno con el Id: " + alumnoID);
        if (ans) {
            this.alumnoService.deleteAlumno(alumnoID).subscribe((data) => {
                this.getAlumnos();
            }, error => console.error(error))
        }
    }
}

interface AlumnoData {
    alumnoId: number;
    nombre: string;
    apellido: string;
    ciudad: string;
    sexo: string;

}
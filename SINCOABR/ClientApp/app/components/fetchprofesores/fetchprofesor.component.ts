import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesorServicio } from '../../servicios/profesorservice.service'

@Component({
    templateUrl: './fetchprofesor.component.html'
})

export class FetchProfesorComponent {
    public profesorList: ProfesorData[];

    constructor(public http: Http, private router: Router, private profesorService: ProfesorServicio) {
        this.getProfesores();
    }

    getProfesores() {
        this.profesorService.getProfesores().subscribe(
            data => this.profesorList = data
        )
    }

    delete(profesorID) {
        var ans = confirm("Desea eliminar el profesor con el Id: " + profesorID);
        if (ans) {
            this.profesorService.deleteProfesor(profesorID).subscribe((data) => {
                this.getProfesores();
            }, error => console.error(error))
        }
    }
}

interface ProfesorData {
    profesorId: number;
    nombre: string;
    apellido: string;
    ciudad: string;
    sexo: string;

}
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoXMateriaServicio } from '../../servicios/alumnoXmateriaservice.service'

@Component({
    templateUrl: './fetchalumnoXmateriaReport.component.html'
})

export class FetchAlumnoXMateriaComponentReport {
    public alumnoXmateriaList: AlumnoXMateriaData[];
    alumnoId: number = 0;

    constructor(public http: Http, private router: Router, private alumnoXmateriaService: AlumnoXMateriaServicio, private _avRoute: ActivatedRoute) {
        this.getAlumnosXmateriaXAlumnoId();
    }

    getAlumnosXmateriaXAlumnoId() {
        this.alumnoId = this._avRoute.snapshot.params["id"];
        this.alumnoXmateriaService.getAlumnoXMateriaInnerJoin(this.alumnoId).subscribe(
            data => this.alumnoXmateriaList = data
        )
    }

    delete(alumnoID) {
        var ans = confirm("Desea eliminar el registro con el Id: " + alumnoID);
        if (ans) {
            this.alumnoXmateriaService.deleteAlumnoXMateria(alumnoID).subscribe((data) => {
                this.getAlumnosXmateriaXAlumnoId();
            }, error => console.error(error))
        }
    }
}

interface AlumnoXMateriaData {
    id: number;
    nombre: string;
    apellido: number;
    materia1: number;
    calificacion: string;

}
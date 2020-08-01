import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoXMateriaServicio } from '../../servicios/alumnoXmateriaservice.service'

@Component({
    templateUrl: './fetchalumnoXmateria.component.html'
})

export class FetchAlumnoXMateriaComponent {
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
}

interface AlumnoXMateriaData {
    id: number;
    nombre: string;
    apellido: number;
    materia1: number;
    calificacion: string;

}
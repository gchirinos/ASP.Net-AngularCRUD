
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaServicio } from '../../servicios/materiaservice.service'

@Component({
    templateUrl: './fetchmateria.component.html'
})

export class FetchMateriaComponent {
    public materiaList: MateriaData[];

    constructor(public http: Http, private router: Router, private _materiaService: MateriaServicio) {
        this.getMaterias();
    }

    getMaterias() {
        this._materiaService.getMaterias().subscribe(
            data => this.materiaList = data
        )
    }

    delete(id) {
        var ans = confirm("Desea eliminar la materia con el Id: " + id);
        if (ans) {
            this._materiaService.deleteMateria(id).subscribe((data) => {
                this.getMaterias();
            }, error => console.error(error))
        }
    }
}

interface MateriaData {
    id: number;
    materia1: string;
}
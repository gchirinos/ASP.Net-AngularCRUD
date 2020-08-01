import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchAlumnoXMateriaComponent } from '../fetchalumnosXmateria/fetchalumnoXmateria.component';
import { AlumnoXMateriaServicio } from '../../servicios/alumnoXmateriaservice.service'

@Component({
    templateUrl: './AddAlumnoXMateria.component.html'
})

export class createAlumnoXMateria implements OnInit {
    alumnoXmateriaForm: FormGroup;
    titulo: string = "Crear";
    alumnoXmateriaId: number = 0;
    AlumnoId: number = 0;
    errorMessage: any;
    materiaList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private alumnoXmateriaService: AlumnoXMateriaServicio, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.AlumnoId = this._avRoute.snapshot.params["id"];
        }

        this.alumnoXmateriaForm = this._fb.group({
            id: 0,
            idalumno: this.AlumnoId,
            idperiodo: ['', [Validators.required]],
            idmateria: ['', [Validators.required]],
            calificacion: ['', [Validators.required]]

        })
    }

    ngOnInit() {

        this.alumnoXmateriaService.getMateriaLista().subscribe(
            data => this.materiaList = data
        )

        if (this.alumnoXmateriaId > 0) {
            this.titulo = "Edit";
            this.alumnoXmateriaService.getAlumnoXMateriaById(this.alumnoXmateriaId)
                .subscribe(resp => this.alumnoXmateriaForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.alumnoXmateriaForm.valid) {
            return;
        }

        if (this.titulo == "Crear") {
            this.alumnoXmateriaService.saveAlumnoXMateria(this.alumnoXmateriaForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-alumnoXmateria/' + this.AlumnoId]);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-alumnoXmateria/' + this.AlumnoId]);
    }

    get idalumno() { return this.alumnoXmateriaForm.get('idalumno'); }
    get idperiodo() { return this.alumnoXmateriaForm.get('idperiodo'); }
    get idmateria() { return this.alumnoXmateriaForm.get('idmateria'); }
    get calificacion() { return this.alumnoXmateriaForm.get('calificacion'); }
}
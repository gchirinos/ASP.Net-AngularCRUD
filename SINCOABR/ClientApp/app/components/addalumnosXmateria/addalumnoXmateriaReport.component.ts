import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoXMateriaServicio } from '../../servicios/alumnoXmateriaservice.service'

@Component({
    templateUrl: './AddAlumnoXMateriaReport.component.html'
})

export class createAlumnoXMateriaReport implements OnInit {
    alumnoXmateriaFormReport: FormGroup;
    titulo: string = "Crear";
    alumnoXmateriaId: number = 0;
    errorMessage: any;
    materiaList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private alumnoXmateriaService: AlumnoXMateriaServicio, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.alumnoXmateriaId = this._avRoute.snapshot.params["id"];
        }

        this.alumnoXmateriaFormReport = this._fb.group({
            id: 0,
            //idperiodo: ['', [Validators.required]],
            //idmateria: ['', [Validators.required]],
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
                .subscribe(resp => this.alumnoXmateriaFormReport.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.alumnoXmateriaFormReport.valid) {
            return;
        }

        if (this.titulo == "Crear") {
            this.alumnoXmateriaService.saveAlumnoXMateria(this.alumnoXmateriaFormReport.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-alumnoXmateria/']);
                }, error => this.errorMessage = error)
        }

        if (this.alumnoXmateriaId > 0) {
            this.titulo = "Edit";
            this.alumnoXmateriaService.getAlumnoXMateriaById(this.alumnoXmateriaId)
                .subscribe(resp => this.alumnoXmateriaFormReport.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }

    cancel() {
        this._router.navigate(['/fetch-alumnoXmateriaReport']);
    }

    //get idperiodo() { return this.alumnoXmateriaFormReport.get('idperiodo'); }
    get idmateria() { return this.alumnoXmateriaFormReport.get('idmateria'); }
    get calificacion() { return this.alumnoXmateriaFormReport.get('calificacion'); }
}
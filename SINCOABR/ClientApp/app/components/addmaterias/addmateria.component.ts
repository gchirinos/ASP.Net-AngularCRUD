import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchMateriaComponent } from '../fetchmaterias/fetchmateria.component';
import { MateriaServicio } from '../../servicios/materiaservice.service'

@Component({
    templateUrl: './AddMateria.component.html'
})

export class createMateria implements OnInit {
    materiaForm: FormGroup;
    titulo: string = "Crear";
    id: number = 0;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private materiaService: MateriaServicio, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }

        this.materiaForm = this._fb.group({
            id: 0,
            materia1: ['', [Validators.required]],

        })
    }

    ngOnInit() {
        
        if (this.id > 0) {
            this.titulo = "Edit";
            this.materiaService.getMateriaById(this.id)
                .subscribe(resp => this.materiaForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.materiaForm.valid) {
            return;
        }

        if (this.titulo == "Crear") {
            this.materiaService.saveMateria(this.materiaForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-materia']);
                }, error => this.errorMessage = error)
        }
        else if (this.titulo == "Edit") {
            this.materiaService.updateMateria(this.materiaForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-materia']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-materia']);
    }

    get materia1() { return this.materiaForm.get('materia1'); }
}
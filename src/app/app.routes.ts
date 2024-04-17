import { Routes } from '@angular/router';
import { AutoComponent } from './componentes/auto/auto.component';
import { Component } from '@angular/core';
import { CarreraComponent } from './componentes/carrera/carrera.component';

export const routes: Routes = [{path:'**', component:CarreraComponent}];

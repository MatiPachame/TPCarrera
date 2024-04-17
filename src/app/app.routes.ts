import { Routes } from '@angular/router';
import { AutoComponent } from './componentes/auto/auto.component';
import { Component } from '@angular/core';

export const routes: Routes = [{path:'**', component:AutoComponent}];

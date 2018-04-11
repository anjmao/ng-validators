import { Component } from '@angular/core';
import { appRoutes } from '../app.module';

@Component({
    selector: 'layout-sidenav',
    template: `
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active" *ngFor="let route of routes">
                <a class="nav-link" routerLink="{{route.routerLink}}" routerLinkActive="active">{{route.name}}</a>
            </li>
        </ul>
    `
})
export class LayoutSidenavComponent {
    routes = [];

    constructor() {
        this.routes = appRoutes.filter(route => route.component)
            .map(route => ({
                name: route.data.title,
                routerLink: `/${route.path}`
            }));
    }
}



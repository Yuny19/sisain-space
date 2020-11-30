import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    toggled = false;

    constructor(private router: Router) { }

    ngOnInit() { }

    //to toggle menu
    onToggle() {
        this.toggled = !this.toggled;
    }

    signOut() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}
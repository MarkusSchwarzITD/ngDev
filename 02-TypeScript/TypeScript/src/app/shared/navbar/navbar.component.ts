import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '../menu/menu.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MenuItem } from '../menu/menu-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private ms: MenuService,
    private sns: SnackbarService
  ) {}

  editorDisplayed: boolean;
  hamburgerVisible = true;
  rootRoutes: Route[];
  menuItems: Observable<MenuItem[]>;

  ngOnInit() {
    this.editorDisplayed = false;
    this.menuItems = this.ms.getTopItems();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.hamburgerVisible = event.url.includes('demos');
      });
  }

  toggleMenu() {
    this.ms.toggleMenu();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented! - just for demo');
  }
}

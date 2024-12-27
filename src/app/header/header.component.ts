import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/http-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSidebarShowing = false;
  @Output() sectionChange = new EventEmitter<string>();

  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit(): void {
  }

  navigateToLogout() {
    this.ApiService.logout();
    localStorage.clear();
    this.router.navigate(['/']);
  }

  openSideBar() {
    this.isSidebarShowing = true;
  }

  closeSideBar() {
    this.isSidebarShowing = false;
  }
}

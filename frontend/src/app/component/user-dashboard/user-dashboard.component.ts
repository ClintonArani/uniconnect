import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faHome, faUsers, faBriefcase, faBell, faCommentDots, faCaretDown, faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  faHome = faHome;
  faUsers = faUsers;
  faBriefcase = faBriefcase;
  faBell = faBell;
  faCommentDots = faCommentDots;
  faCaretDown = faCaretDown;
  faTh = faTh;
  isDropdownVisible = false;
  private clickListener!: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef, private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    // Listen for clicks outside of the dropdown to close it
    this.clickListener = this.renderer.listen('document', 'click', (event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    });
  }

  ngOnDestroy() {
    // Clean up the click listener when the component is destroyed
    if (this.clickListener) {
      this.clickListener();
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents the event from closing immediately
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  viewProfile() {
    console.log("View Profile clicked");
  }

  showMynetwork(){
    this.router.navigate(["mynetwork"],{relativeTo: this.route})
  }
  showFeed(){
    this.router.navigate(["feed"],{relativeTo: this.route})
  }
}

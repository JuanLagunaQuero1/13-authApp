import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  templateUrl: './dahsboard-layout.component.html',
  styleUrl: './dahsboard-layout.component.css'
})
export class DahsboardLayoutComponent {
  private authService = inject(AuthService)
  public user = computed(() => this.authService.currentUser())

  // get user() {
  //   return this.authService.currentUser();
  // }

}

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminGuard } from './guards';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService, AuthService, NavigationService } from './services';
import { NotificationService } from './services/notification.service';
export const CORE_PROVIDERS = [
  IsLoggedInGuard,
  AdminGuard,
  ApiService,
  AuthService,
  NavigationService,
  NotificationService,
];

export const CORE_MODULES = [CommonModule, NgxPermissionsModule, MatSnackBarModule, MatDialogModule];

@NgModule({
  imports: [...CORE_MODULES],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}

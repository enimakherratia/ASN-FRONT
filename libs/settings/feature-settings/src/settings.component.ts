import { InputErrorsComponent, ListErrorsComponent } from '@myproject/core/forms';
import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { AuthStore } from '@myproject/auth/data-access';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cdt-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  imports: [ListErrorsComponent, ReactiveFormsModule, InputErrorsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  private readonly authStore = inject(AuthStore);
  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    image: [''],
    username: ['', [Validators.required]],
    bio: [''],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit() {
    this.authStore.getUser();
  }

  readonly setUserDataToForm = effect(() => {
    const userLoaded = this.authStore.getUserLoaded();
    if (userLoaded) {
      this.form.patchValue(this.authStore.user());
    }
  });

  onSubmit() {
    this.authStore.updateUser(this.form.getRawValue());
  }

  logout() {
    this.authStore.logout();
  }
}

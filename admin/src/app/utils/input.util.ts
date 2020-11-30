import { FormGroup } from "@angular/forms";

export function isFieldInvalid(form: FormGroup, field: string | Array<string>): boolean {
  const fieldControl = form.get(field);
  return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
}

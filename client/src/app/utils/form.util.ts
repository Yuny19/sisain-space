export function normalizeFlag(form: any) {
    let copiedFormValue = Object.assign({}, form.value);  
    return copiedFormValue;
  }
const toFormData = (object: Object | any) => Object.keys(object).reduce((formData, key) => {
  formData.append(key, object[key]);
  return formData;
}, new FormData());

export { toFormData as default };
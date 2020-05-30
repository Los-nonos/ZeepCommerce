export const errorUserPassword = (data, status, type) => {
  const { code, details } = data.errors;
  const fields = ['oldPassword', 'newPassword', 'newPasswordConfirmation'];

  let res = {};
  fields.forEach(field => {
    if (details.errors[field]) {
      res = {
        type,
        error: {
          code: status,
          type: code,
          detail: details.errors[field].message,
          errors: details.errors,
        },
      };
    }
  });

  return res;
};

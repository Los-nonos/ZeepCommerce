export const config = (route, defaultValue = null) => {
  let finalValue = defaultValue;
  if(route.includes('.'))
  {
    const values = route.split('.');
    values.forEach((value, key) => {
      finalValue = key === 0 ? configValues[value] : finalValue[value];
    });
  }else {
    finalValue = configValues[route];
  }

  if(typeof finalValue !== "string")
  {
    throw new Error('Config value is not valid');
  }
  else{
    return finalValue ? finalValue : defaultValue;
  }
}

const configValues = {

}
const minDate = (date1, date2) => new Date(date1) < new Date(date2) ? date1: date2;
console.log("Min Date is - ", minDate('02/05/2021', '24/01/2021'));
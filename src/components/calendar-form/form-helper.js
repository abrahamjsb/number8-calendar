export const setDateFormat = (date) => (date.getFullYear() +'/'+ displayFormatMonth(date.getMonth()) +'/'+ displayFormatDay(date.getDate()));
const displayFormatDay = (d) => (d < 10 ? "0"+d : d);
const displayFormatMonth = (m) => (m+1 < 10 ? "0"+(m+1): m+1);
export const validateForm = (form) => {

    const validateElm =  form.elements.map(i => ({i}));
};

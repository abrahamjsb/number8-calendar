export const validateForm = () => (console.log("im created"));
export const setDateFormat = (date) => (displayFormatMonth(date.getMonth()) +'/'+ displayFormatDay(date.getDate()) +'/'+ date.getFullYear());
const displayFormatDay = (d) => (d < 10 ? "0"+d : d);
const displayFormatMonth = (m) => (m+1 < 10 ? "0"+(m+1): m+1);
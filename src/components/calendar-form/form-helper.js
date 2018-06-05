
export const setDateFormat = (date, code) => (code.toUpperCase() === "ES" ? setDateFormatES(date) : setDateFormatEN(date));
export const validateForm = () => (console.log("im created"));
const setDateFormatES = (date) => (displayFormatDay(date.getDate()) +'/'+ displayFormatMonth(date.getMonth()) +'/'+ date.getFullYear());
const setDateFormatEN = (date) => (displayFormatMonth(date.getMonth()) +'/'+ displayFormatDay(date.getDate()) +'/'+ date.getFullYear());
const displayFormatDay = (d) => (d < 10 ? "0"+d : d);
const displayFormatMonth = (m) => (m+1 < 10 ? "0"+(m+1): m+1);
const commaPattern = /\B(?=(\d{3})+(?!\d))/g;

export default (num) => num ? num.replace(commaPattern, ",") : num;

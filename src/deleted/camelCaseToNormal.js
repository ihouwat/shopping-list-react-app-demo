 const camelCaseToNormal = (str) => str.replace(/([A-Z])/g, ' $1').replace(/^./, str2 => str2.toUpperCase());
export default camelCaseToNormal
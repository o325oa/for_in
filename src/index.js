export default function orderByProps(obj, order) {
  const ordered = [];
  const rest = [];

  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ordered.push({ key, value: obj[key] });
    }
  }

  for (const key in obj) {
    if (!order.includes(key)) {
      rest.push({ key, value: obj[key] });
    }
  }

  rest.sort((a, b) => a.key.localeCompare(b.key));
  return [...ordered, ...rest];
} 
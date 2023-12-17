export default function getItemsById(ids, items) {
  const result = Array(ids.length);
  let entryCount = 0;
  for (let i = 0 ; i < items.length ; i++) {
    for (let j = 0 ; j < ids.length ; j++) {
      if (items[i].id === ids[j]) {
        result[j] = items[i];
        entryCount++;
      };
      if (entryCount === ids.length) {
        return result;
      };
    };
  };
  return result;
};
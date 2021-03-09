const setFilterAction = function (callback) {
  let filters = [];
  const housingTypeFilter = document.querySelector('#housing-type');

  housingTypeFilter.addEventListener('change', (evt) => {
    filters = [];
    if (evt.target.value !== 'any') {
      const typeMap = {
        key: 'type',
        value: evt.target.value,
      }
      filters.push(typeMap);
    }
    callback(filters);
  })
}

export {setFilterAction};



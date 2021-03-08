const setFilterAction = function (callback) {
  const filters = [];
  const housingTypeFilter = document.querySelector('#housing-type');

  housingTypeFilter.addEventListener('change', (evt) => {
    const typeMap = {
      type: evt.target.value,
    }
    filters.push(typeMap);
    callback(filters);
  })
}

export {setFilterAction};



const setFilterAction = function (callback) {
  const filters = [];
  const housingTypeFilter = document.querySelector('#housing-type');

  housingTypeFilter.addEventListener('change', (evt) => {
    filters.push(evt.target.value);
    callback(filters);
  })
}

export {setFilterAction};



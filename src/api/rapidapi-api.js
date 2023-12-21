let value = getRequest("https://irctc1.p.rapidapi.com/api/v1/searchTrain", {query: "12565"}, {
    'X-RapidAPI-Key': 'ae31c5b095msh519c31e639f1181p18fa6ejsn34d5b508ca52',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  })

  console.log(value);
  
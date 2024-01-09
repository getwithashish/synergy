var sourceStationCode = "";
var destinationStationCode = "";

const autoCompleteSrcStationJS = new autoComplete({
  selector: "#autocompleteSrcStation",
  placeHolder: "Source Station...",
  data: {
    src: async (query) => {
      const data = await searchStation({ query: query });
        // const data = await getStationsList({ q: query });

      return data;
    },
    keys: ["name"],
    cache: false,
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteSrcStationJS.input.value = `${selection.name} (${selection.code})`;
        sourceStationCode = selection.code;
        addSourceMarker(selection.code);
        console.log("Selected: ", selection);
      },
    },
  },
});

const autoCompleteDestStationJS = new autoComplete({
  selector: "#autocompleteDestStation",
  placeHolder: "Destination Station...",
  data: {
    src: async (query) => {
    //   const data = await searchStation({ query: query });
    const data = await getStationsList({ q: query });
      return data;
    },
    keys: ["name"],
    cache: false,
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteDestStationJS.input.value = `${selection.name} (${selection.code})`;
        destinationStationCode = selection.code;
        addDestinationMarker(selection.code);
        console.log("Selected: ", selection);
      },
    },
  },
});

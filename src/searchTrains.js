const autoCompleteSearchTrainJS = new autoComplete({
    selector: "#autocompleteTrainSearch",
    placeHolder: "Search Train...",
    data: {
        src: async (query) => {
            const data = await searchTrain({query: query});
            return data;
        },
        keys: ["train_number", "train_name"],
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
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteSearchTrainJS.input.value = `${selection.train_name} (${selection.train_number})`;
                console.log("Selected: ", selection);
                window.location.href=`http://127.0.0.1:5503/pages/html&css/pages/dashboard/dashboard.html?trainNumber=${selection.train_number}`;
            }
        }
    }
});
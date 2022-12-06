console.clear();

const form = document.getElementById("tripsForm");

const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const destination = formData.get("destination");
    const date = formData.get("date");
    const days = formData.get('number')
    const values = { destination, date, days };
    console.log(values);
};

form.addEventListener("submit", onSubmit);
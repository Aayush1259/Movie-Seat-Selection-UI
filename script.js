document.addEventListener("DOMContentLoaded", function () {
  const movieSelect = document.getElementById("movie");
  const seatsContainer = document.querySelector(".seats-container");
  const count = document.getElementById("count");
  const total = document.getElementById("total");

  let ticketPrice = parseInt(movieSelect.value);

  // Function to update total and count
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  }

  // Function to create seats
  function createSeats() {
    const rows = 6;
    const seatsPerRow = 8;

    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < seatsPerRow; j++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.setAttribute("data-row", i + 1);
        seat.setAttribute("data-seat", j + 1);
        row.appendChild(seat);
      }

      seatsContainer.appendChild(row);
    }
  }

  // Initial seat creation
  createSeats();

  // Movie select event
  movieSelect.addEventListener("change", function () {
    ticketPrice = parseInt(this.value);
    updateSelectedCount();
  });

  // Seat click event
  seatsContainer.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");
      updateSelectedCount();
    }
  });
});

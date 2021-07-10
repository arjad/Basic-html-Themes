
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);
console.log(`1) ticket price=`,ticketPrice)

function updateSelectedCount() 
{
  const selectedSeats = document.querySelectorAll(".row .selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerHTML = selectedSeatsCount;
  total.innerHTML = selectedSeatsCount * ticketPrice;

  console.log(`selevted seat coint`,selectedSeatsCount)
  console.log(`ticketprice`,ticketPrice)
  console.log(`total`, selectedSeatsCount * ticketPrice);
}

movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  updateSelectedCount();
});

///////  1  ///////
container.addEventListener("click", (e) => {
  console.log(e);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  )
  {
    console.log(`unoccupied`)
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
  if(e.target.classList.contains("occupied"))
  {
    console.log(`occupied`)
  }
});
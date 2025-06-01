const books = [
  { id: 1, title: "Java for Beginners", author: "Sunita Sharma", price: 250 },
  { id: 2, title: "HTML & CSS", author: "Ravi Kumar", price: 180 },
  { id: 3, title: "Learn JavaScript", author: "Neha Singh", price: 220 },
  { id: 4, title: "Python Beginners", author: "Dwija Joshi", price: 450 }
];

const table = document.getElementById("bookTable");

books.forEach(book => {
  const row = table.insertRow();
  row.innerHTML = `
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>₹ ${book.price}</td>
    <td><button onclick="buyBook(${book.id})">Buy</button></td>
  `;
});

function buyBook(id) {
  const book = books.find(b => b.id === id);
  alert(`✅ Thank you for buying "${book.title}" book!`);
}
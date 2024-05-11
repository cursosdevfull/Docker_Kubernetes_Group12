const p1 = document.getElementById("message1");
const p2 = document.getElementById("message2");

fetch("/api/config")
  .then((res) => res.json())
  .then((res) => {
    const path = res.path;
    fetch(path)
      .then((res) => res.json())
      .then((res) => {
        const { message1, message2 } = res;
        p1.textContent = message1;
        p2.textContent = message2;
      });
  });

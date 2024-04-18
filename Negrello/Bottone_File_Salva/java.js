//chiama il form nella parte di html
const form = document.getElementById("mioForm");

form.addEventListener("submit", (event) => {
  //evita che venga inviato un form vuoto
  event.preventDefault();
  //valori da inserire nei campi
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const data = `${name}\n${email}\n`; //Come sara stampato sul file

  //Il tipo Blob serve per la creazione dei file e lo apre come text/plain
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "salve.txt";
  a.click();

  URL.revokeObjectURL(url);
});
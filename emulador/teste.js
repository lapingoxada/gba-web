const arquivo = document.getElementById("arquivoJogo");

arquivo.addEventListener("change", function() {
  if (arquivo.files.length > 0) {
    alert("Arquivo selecionado: " + arquivo.files[0].name);
  }
});

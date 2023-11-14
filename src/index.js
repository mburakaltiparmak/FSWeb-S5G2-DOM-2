import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
{
  document
    .querySelector(".intro img")
    .addEventListener("mouseover", (event) => {
      onmouseover = event;
      alert("Gezmek ister misin?");
    });
}
{
  const contentSection = document.querySelector(".content-section");
  const imgContentDivImg = contentSection.querySelector(".img-content img");
  imgContentDivImg.addEventListener("click", (event) => {
    onclick = event;
    alert(
      "Evliya Çelebi gibi gezebilirsin, biraz da Marco Polo'culuk ekleyelim. Gemi var ya hani."
    );
  });
}

const contentSection = document.querySelector(".content-section");
const textContentDiv = contentSection.querySelector(".text-content");

textContentDiv.addEventListener("mouseover", (event) => {
  onmouseover = event;
  let person = prompt("Bunu kim söylüyordu ya?:", "Cem Yılmaz... mı acaba?");
  if (person == null || person == "") {
    alert("Boş bıraktın ha! Gıcık biriyimdir, evet!");
  } else {
    console.log(
      "Hah! Sen öyle san!" +
        person +
        "mış!" +
        "Volkan Konak olacaktı, çünkü tüm kozmosu Volkan Konak'lar yönetiyor!"
    );
  }
});

{
  const contentSectionInverseContent = document.querySelector(
    ".content-section.inverse-content"
  );
  const imgContentDivImg2 =
    contentSectionInverseContent.querySelector(".img-content img");
  imgContentDivImg2.addEventListener("dblclick", function () {
    imgContentDivImg2.style.width = imgContentDivImg2.width * 1.5 + "rem";
    imgContentDivImg2.style.height = imgContentDivImg2.height * 1.5 + "rem";
    imgContentDivImg2.style.maxWidth = 40 + "rem";
    imgContentDivImg2.style.maxHeight = 40 + "rem";
  });
}
{
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 100) {
      const gifImg =
        "https://64.media.tumblr.com/f6758e593d0cf90ecdd551637e50102a/tumblr_pge1pvHFdc1ujmvy2o1_1280.jpg";
      window.open(gifImg);
    }
  });
}
{
  const contentDestination = document.querySelector(".content-destination");
  const imgContentDivImg3 = contentDestination.querySelector("img");
  imgContentDivImg3.addEventListener("dblclick", (event) => {
    ondblclick = event;
    alert(
      "Zırt yasasının bilmem ne maddesine binaen bu fotoğrafa eriştirmiyorum."
    );
  });
}
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "c" || event.code === "KeyC")) {
    alert("Ben Hackerrank'te kopyalayamıyorsam, burda da kopyalattırmam.");
    event.preventDefault();
    event.stopPropagation();
  }
});
const divClassDestination = document.querySelector(".destination");
const btnElements = divClassDestination.querySelectorAll(".btn");

btnElements.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Hoop hemşerim nereye?");
  });
});

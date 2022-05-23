let content = document.querySelector(".gird_content");
async function getdata() {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random/50");
    let data = await res.json();
    let mes = data.message;
    display(mes);
  } catch (err) {
    console.log(err);
  }
}
getdata();

let display = (mes) => {
  mes.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "ssss");

    let img = document.createElement("img");
    img.setAttribute("class", "dimg");
    img.src = el;
    div.append(img);

    content.append(div);
  });
  window.addEventListener("scroll", () => {
    if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        getdata();
      }
    });
  };
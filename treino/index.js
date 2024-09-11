const adviceButtom = document.querySelector(".advice-Buttom");
const adviceNumber = document.querySelector(".advice-Number");
const adviceDescription = document.querySelector(".advice-Text");

async function advice(){
  try{
    const response = await fetch("https://api.adviceslip.com/advice");

    if(!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API")
    }

    const adviceContent = await response.json()
    const adviceNumber = `Adivice # ${adviceContent.slip.id}`
    const adText = `"${adviceContent.slip.adivice}"`
    
    adviceNumber.innerText = adviceNumber
    adviceDescription.innerText = adText

  }catch(error){
    console.error("Erro ao tentar buscar as informações da API", error);
  }
}

adviceButtom.addEventListener("click", advice);

advice();
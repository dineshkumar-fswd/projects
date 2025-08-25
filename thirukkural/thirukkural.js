let result_div = document.getElementById("result");
let btn = document.getElementById("btn").addEventListener("click", async () => {
  let num = parseInt(document.getElementById("num").value);
  if (!num) {
    result_div.innerHTML =
      '<p style="color:red">ஒரு எண்ணை உள்ளிடவும் / Please enter a number </p>';
    return;
  }
  try {
    let response = await fetch("./thirukkural.json");
    let data = await response.json();
    if (isNaN(num) || num < 1 || num > data.length) {
      result_div.innerHTML = `<p style="color:red">1 முதல் 1330 வரை உள்ள எண்ணை உள்ளிடவும் / Enter number between 1 and 1330.</p>`;
      return;
    }

    let kural = data[num - 1];
    console.log(data);

    result_div.innerHTML = `<p> எண்: ${kural.எண்}</p>
                <h3>${kural.குறள்வரி1}</h3>
                    <h3>${kural.குறள்வரி2}</h3>
                    <p><b><u>மு.வரதராசனார் உரை</u></b> : ${kural.மு_வரதராசனார்}</p>
                    <p><b><u>சாலமன் பாப்பையா உரை</u></b> : ${kural.சாலமன்_பாப்பையா}</p>
                    <p><b><u>மு.கருணாநிதி உரை</u></b> : ${kural.மு_கருணாநிதி}</p>
                    <p><b><u>Translation</u></b> : ${kural.ஆங்கிலமொழிபெயர்ப்பு}</p>
                    <p><b><u>Explanation</u></b> : ${kural.ஆங்கிலவிளக்கம்}</p>`;
  } catch (error) {
    result_div.innerHTML = `<p style="color:red">Error loading data: ${error.message}</p>`;
  }
});

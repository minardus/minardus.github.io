const seq = [
	[0,0,0],
  [0,0,1],
  [0,1,0]
  [0,1,1],
  [1,0,0],
  [1,0,1],
  [1,1,0],
  [1,1,0],
  [1,0,1],
  [1,0,0],
  [0,1,1],
  [0,0,1],
  [0,0,0],
  [0,1,0],
];

const getTextBySeq = (seq) => {
	let text = "";

  if (!seq) return text;

  for (const x of seq) {
  	text += `<span class="${x === 0 ? "dark" : "light"}">${x}</span>`;
  }

	return text;
}

const letsBinary = () => {
	const elem = document.getElementById("numbers");
	let index = 0;

  const interval = setInterval(() => {
    const text = getTextBySeq(seq[index++]);
    if (text === "") {
      clearInterval(interval);
    } else {
      elem.innerHTML = text;
    }
  }, 50);
}

const letsBlink = () => {
	const blinkElem = document.getElementById("blink");
	let blink = 0;

  const blinkInterval = setInterval(() => {
    if (blink++ > 3) {
      clearInterval(blinkInterval);
      blinkElem.style.color = "#22b455";
    } else if (blink % 2) {
      blinkElem.style.color = "#000";
    } else {
      blinkElem.style.color = "#22b455";
    }
  }, 240);
}

let toggle = false;
letsBinary();

setInterval(() => {
	if (toggle) {
  	letsBinary();
  } else {
  	letsBlink();
  }
  toggle = !toggle;
}, 7500);

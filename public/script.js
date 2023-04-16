// Get references to DOM elements
var terminal = document.querySelector('.terminal');
var cmdLine = document.querySelector('.cmdline');

// write a new line
function newLine(cmdLine) {
  cmdLine.autofocus = false
  var newInputLine = document.createElement('div')
  newInputLine.setAttribute('class', 'input-line');
  
  var newPrompt = document.createElement('span');
  newPrompt.setAttribute('class', 'prompt');
  
  var newInput = document.createElement('input');
  newInput.setAttribute('spellcheck', "false");
  newInput.setAttribute('class', 'cmdline');
  newInput.autofocus = true;
  newInput.disabled = true

  newInputLine.appendChild(newPrompt);
  newInputLine.appendChild(newInput);
  terminal.appendChild(newInputLine);
  return newInput;
}


//Set default command
var textLines = [
  "So, you are looking for a technical librarian?",
  "",
  "My skillset may be of interest...",
  "",
  "I studied philosophy and computer science and have worked in tech for 7 years.",
  "I currently lead engineering teams that design and develop AI applications.",
  "I explain how these systems work to all audiences, every day.",
  "My work projects are multi-million dollar engagements for stuffy, corporate clients,",
  "but I'd like to use my craft to create things the world will love.",
  "",
  "Let me share some things you won't find on my resume...",
  "",
  "My ideal work environment is one where we have a mission and it matters.",
  "Where ideas flow like crazy and everyone is their unfiltered self.",
  "A place of possibility, not profitability.",
  "And where I am surrounded by brilliant and bold minds with expertise that is hard to find.",
  "(Seriously, the best foot health advice I ever got is from the fitter at my bike shop).",
  "",
  "I am patient, dedicated, and driven to make anything possible.",
  "Whatever I cannot solve myself, I'll get AI to do it for me or hire the person for the job.",
  "",
  "I dig around YouTube and Spotify for the latest African house tracks.",
  "I'm still on the lookout for a release of 'Human Sacrifice'.",
  "And sometimes, I'll watch a movie just for the Ludwig Göransson score.",
  "",
  "",
  "PS - I skipped Coachella for this.",
]

var defaultTimer = 35;
 
function printStr(cmdLine, lines, lineIndex, strIndex) {
  var timer = defaultTimer;
  if (lineIndex > lines.length) {
    return;
  }
  var str = lines[lineIndex];
  if (strIndex > str.length) {
    if (str[strIndex-1] = '?') {
      timer = 900;
    }
    if (str[strIndex-1] = '.') {
      timer = 500;
    }
    cmdLine = newLine(cmdLine);
    lineIndex += 1;
    strIndex = 0;
    setTimeout(printStr, timer, cmdLine, lines, lineIndex, strIndex)
  } else {
    cmdLine.value = str.substring(0, strIndex);
    strIndex += 1
    setTimeout(printStr, timer, cmdLine, lines, lineIndex, strIndex)
  }
}

// type away...
printStr(cmdLine, textLines, 0, 0);

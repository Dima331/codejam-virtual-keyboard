const keys = [
  [{
    en: ['`', '~'],
    ru: ['ё', 'Ё'],
    keyCode: 192,
    class: 'Backquote',
  },
  {
    en: ['1', '!'],
    ru: ['1', '!'],
    keyCode: 49,
    class: 'Digit1',
  },
  {
    en: ['2', '@'],
    ru: ['2', '"'],
    keyCode: 50,
    class: 'Digit2',
  },
  {
    en: ['3', '#'],
    ru: ['3', '№'],
    keyCode: 51,
    class: 'Digit3',
  },
  {
    en: ['4', '$'],
    ru: ['4', ';'],
    keyCode: 52,
    class: 'Digit4',
  },
  {
    en: ['5', '%'],
    ru: ['5', '%'],
    keyCode: 53,
    class: 'Digit5',
  },
  {
    en: ['6', '^'],
    ru: ['6', ':'],
    keyCode: 54,
    class: 'Digit6',
  },
  {
    en: ['7', '&'],
    ru: ['7', '?'],
    keyCode: 55,
    class: 'Digit7',
  },
  {
    en: ['8', '*'],
    ru: ['8', '*'],
    keyCode: 56,
    class: 'Digit8',
  },
  {
    en: ['9', '('],
    ru: ['9', '('],
    keyCode: 57,
    class: 'Digit9',
  },
  {
    en: ['0', ')'],
    ru: ['0', ')'],
    keyCode: 48,
    class: 'Digit0',
  },
  {
    en: ['-', '_'],
    ru: ['-', '_'],
    keyCode: 189,
    class: 'Minus',
  },
  {
    en: ['=', '+'],
    ru: ['=', '+'],
    keyCode: 187,
    class: 'Equal',
  },
  {
    en: ['Backspace', 'Backspace'],
    ru: ['Backspace', 'Backspace'],
    keyCode: 8,
    class: 'Backspace',
    sizeClass: 'backspace',
  },
  ],
  [{
    en: ['tab', 'tab'],
    ru: ['tab', 'tab'],
    keyCode: 9,
    class: 'Tab',
    sizeClass: 'tab',
  },
  {
    en: ['q', 'Q'],
    ru: ['й', 'Й'],
    keyCode: 81,
    class: 'KeyQ Key',
  },
  {
    en: ['w', 'W'],
    ru: ['ц', 'Ц'],
    keyCode: 87,
    class: 'KeyW Key',
  },
  {
    en: ['e', 'E'],
    ru: ['у', 'У'],
    keyCode: 69,
    class: 'KeyE Key',
  },
  {
    en: ['r', 'R'],
    ru: ['к', 'К'],
    keyCode: 82,
    class: 'KeyR Key',
  },
  {
    en: ['t', 'T'],
    ru: ['е', 'Е'],
    keyCode: 84,
    class: 'KeyT Key',
  },
  {
    en: ['y', 'Y'],
    ru: ['н', 'Н'],
    keyCode: 89,
    class: 'KeyY Key',
  },
  {
    en: ['u', 'U'],
    ru: ['г', 'Г'],
    keyCode: 85,
    class: 'KeyU Key',
  },
  {
    en: ['i', 'I'],
    ru: ['ш', 'Ш'],
    keyCode: 73,
    class: 'KeyI Key',
  },
  {
    en: ['o', 'O'],
    ru: ['щ', 'Щ'],
    keyCode: 79,
    class: 'KeyO Key',
  },
  {
    en: ['p', 'P'],
    ru: ['з', 'З'],
    keyCode: 80,
    class: 'KeyP Key',
  },
  {
    en: ['[', '{'],
    ru: ['х', 'Х'],
    keyCode: 219,
    class: 'BracketLeft Key',
  },
  {
    en: [']', '}'],
    ru: ['ъ', 'Ъ'],
    keyCode: 221,
    class: 'BracketRight Key',
  },
  {
    en: ['\\', '|'],
    ru: ['\\', '/'],
    keyCode: 220,
    class: 'Backslash',
  },
  ],
  [{
    en: ['capsLk', 'capsLk'],
    ru: ['capsLk', 'capsLk'],
    keyCode: 20,
    class: 'CapsLock',
    sizeClass: 'caps',
  },
  {
    en: ['a', 'A'],
    ru: ['ф', 'Ф'],
    keyCode: 65,
    class: 'KeyA Key',
  },
  {
    en: ['s', 'S'],
    ru: ['ы', 'Ы'],
    keyCode: 83,
    class: 'KeyS Key',
  },
  {
    en: ['d', 'D'],
    ru: ['в', 'В'],
    keyCode: 68,
    class: 'KeyD Key',
  },
  {
    en: ['f', 'F'],
    ru: ['а', 'А'],
    keyCode: 70,
    class: 'KeyF Key',
  },
  {
    en: ['g', 'G'],
    ru: ['п', 'П'],
    keyCode: 71,
    class: 'KeyG Key',
  },
  {
    en: ['h', 'H'],
    ru: ['р', 'Р'],
    keyCode: 72,
    class: 'KeyH Key',
  },
  {
    en: ['j', 'J'],
    ru: ['о', 'О'],
    keyCode: 74,
    class: 'KeyJ Key',
  },
  {
    en: ['k', 'K'],
    ru: ['л', 'Л'],
    keyCode: 75,
    class: 'KeyK Key',
  },
  {
    en: ['l', 'L'],
    ru: ['д', 'Д'],
    keyCode: 76,
    class: 'KeyL Key',
  },
  {
    en: [';', ';'],
    ru: ['ж', 'Ж'],
    keyCode: 186,
    class: 'Semicolon Key',
  },
  {
    en: ['"', '\''],
    ru: ['э', 'Э'],
    keyCode: 222,
    class: 'Quote Key',
  },
  {
    en: ['enter', 'enter'],
    ru: ['enter', 'enter'],
    keyCode: 13,
    class: 'Enter',
    sizeClass: 'enter',
  },
  ],
  [{
    en: ['shift', 'shift'],
    ru: ['shift', 'shift'],
    keyCode: 16,
    class: 'ShiftLeft',
    sizeClass: 'shift',
  },
  {
    en: ['z', 'Z'],
    ru: ['я', 'Я'],
    keyCode: 90,
    class: 'KeyZ Key',
  },
  {
    en: ['x', 'X'],
    ru: ['ч', 'Ч'],
    keyCode: 88,
    class: 'KeyX Key',
  },
  {
    en: ['c', 'C'],
    ru: ['с', 'С'],
    keyCode: 67,
    class: 'KeyC Key',
  },
  {
    en: ['v', 'V'],
    ru: ['м', 'М'],
    keyCode: 86,
    class: 'KeyV Key',
  },
  {
    en: ['b', 'B'],
    ru: ['и', 'И'],
    keyCode: 66,
    class: 'KeyB Key',
  },
  {
    en: ['n', 'N'],
    ru: ['т', 'Т'],
    keyCode: 78,
    class: 'KeyN Key',
  },
  {
    en: ['m', 'M'],
    ru: ['ь', 'Ь'],
    keyCode: 77,
    class: 'KeyM Key',
  },
  {
    en: [',', '<'],
    ru: ['б', 'Б'],
    keyCode: 188,
    class: 'Comma Key',
  },
  {
    en: ['.', '>'],
    ru: ['ю', 'Ю'],
    keyCode: 190,
    class: 'Period Key',
  },
  {
    en: ['/', '?'],
    ru: ['.', ','],
    keyCode: 191,
    class: 'Slash',
  },
  {
    en: ['shift', 'shift'],
    ru: ['shift', 'shift'],
    keyCode: 16,
    class: 'ShiftRight',
    sizeClass: 'shift',
  },
  ],
  [{
    en: ['ctrl', 'ctrl'],
    ru: ['ctrl', 'ctrl'],
    keyCode: 17,
    class: 'ControlLeft',
    sizeClass: 'crtl',
  },
  {
    en: ['win', 'win'],
    ru: ['win', 'win'],
    keyCode: 91,
    class: 'MetaLeft',
    sizeClass: 'win',
  },
  {
    en: ['alt', 'alt'],
    ru: ['alt', 'alt'],
    keyCode: 18,
    class: 'AltLeft',
    sizeClass: 'alt',
  },
  {
    en: ['', ''],
    ru: ['', ''],
    keyCode: 32,
    class: 'Space',
    sizeClass: 'space',
  },
  {
    en: ['alt', 'alt'],
    ru: ['alt', 'alt'],
    keyCode: 18,
    class: 'AltRight',
    sizeClass: 'alt',
  },
  {
    en: ['win', 'win'],
    ru: ['win', 'win'],
    keyCode: 91,
    class: 'MetaRight',
    sizeClass: 'win',
  },
  {
    en: ['ctrl', 'ctrl'],
    ru: ['ctrl', 'ctrl'],
    keyCode: 17,
    class: 'ControlRight',
    sizeClass: 'crtl',
  },
  ],
];

let caps = false; // change caps

function capsChange(firstRun = false) {
  const up = document.querySelectorAll('.up');
  const down = document.querySelectorAll('.down');

  down.forEach((elem, i) => {
    if (up[i].parentNode.classList.contains('Key')) {
      up[i].classList.remove('up');
      down[i].classList.remove('down');
      up[i].classList.add('down');
      down[i].classList.add('up');
    }
  });
  if (!firstRun) {
    if (caps) {
      caps = false;
    } else {
      caps = true;
    }
    if (localStorage.getItem('caps', false) === 'false') {
      localStorage.setItem('caps', true);
    } else {
      localStorage.setItem('caps', false);
    }
  }
}

function shiftChange() {
  const up = document.querySelectorAll('.up');
  const down = document.querySelectorAll('.down');
  down.forEach((elem, i) => {
    up[i].classList.remove('up');
    down[i].classList.remove('down');
    up[i].classList.add('down');
    down[i].classList.add('up');
  });
}

function languageChange() {
  const on = document.querySelectorAll('.on');
  const off = document.querySelectorAll('.off');
  off.forEach((elem, i) => {
    on[i].classList.remove('on');
    off[i].classList.remove('off');
    on[i].classList.add('off');
    off[i].classList.add('on');
  });
}

function activeAnimation(trigger) {
  trigger.classList.add('active');
  setTimeout(() => {
    trigger.classList.remove('active');
  }, 400);
}

const div = document.createElement('div');
div.className = 'wrapper';
document.body.append(div);

const textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', true);
textarea.setAttribute('rows', '10');
textarea.setAttribute('cols', '60');
div.append(textarea);

const keywords = document.createElement('ul');
keywords.className = 'keywords';
div.append(keywords);

keys.forEach((elem) => {
  const keywordsRow = document.createElement('li');
  keywordsRow.className = 'keywords__row';
  keywords.append(keywordsRow);

  elem.forEach((element) => {
    const keyItem = element;
    const key = document.createElement('div');
    key.className = 'key';
    keywordsRow.append(key);

    if (keyItem.sizeClass) {
      // add class for size block
      key.classList.add(keyItem.sizeClass);
    }

    const spanOff = document.createElement('span'); // back span, other language
    spanOff.className = `${keyItem.class} off`;

    const spanOn = document.createElement('span'); // front span, look language
    spanOn.className = `${keyItem.class} on`;

    key.append(spanOff);
    key.append(spanOn);

    function change(itemLan, lan) {
      let addOtherLan = true; // current for back and front inscriptions
      const keyItemLan = itemLan;

      keyItemLan.forEach((item) => {
        const caseLan = document.createElement('span');
        if (addOtherLan) {
          caseLan.className = 'case up';
        } else {
          caseLan.className = 'case down';
        }
        caseLan.innerHTML = item;
        if (lan) {
          spanOn.append(caseLan);
        } else {
          spanOff.append(caseLan);
        }
        addOtherLan = false;
      });
    }

    change(keyItem.en, true);
    change(keyItem.ru, false);
  });
});


const click = document.querySelectorAll('.keywords__row');

click.forEach((elem, i) => {
  click[i].addEventListener('click', (e) => {
    let trigger; // target click

    if (e.target.classList.contains('keywords__row')) {
      return;
    }
    if (e.target.classList.contains('key')) {
      trigger = e.target;
    } else {
      trigger = e.target.parentNode.parentNode;
    }

    if (trigger.classList.contains('caps')) {
      capsChange();
      activeAnimation(trigger);
      return;
    }
    if (
      trigger.classList.contains('crtl')
            || trigger.classList.contains('alt')
            || trigger.classList.contains('win')
            || trigger.classList.contains('shift')
    ) {
      e.preventDefault();
      activeAnimation(trigger);
      return;
    }
    if (trigger.classList.contains('tab')) {
      e.preventDefault();
      textarea.value += '\t';
      activeAnimation(trigger);
      return;
    }
    if (trigger.classList.contains('space')) {
      textarea.value += ' ';
      activeAnimation(trigger);
      return;
    }
    if (trigger.classList.contains('backspace')) {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      activeAnimation(trigger);
      return;
    }
    if (trigger.classList.contains('enter')) {
      textarea.value += '\n';
      activeAnimation(trigger);
      return;
    }

    let pressBtn;
    let frontKeys;

    trigger.childNodes.forEach((itemTrigger) => {
      if (itemTrigger.classList.contains('on')) {
        frontKeys = itemTrigger;
        frontKeys.childNodes.forEach((element) => {
          if (element.classList.contains('up')) {
            pressBtn = element;
          }
        });
      }
    });
    activeAnimation(trigger);
    textarea.value += pressBtn.innerHTML;
  });
});

let pressShift = true; // one event press for shift

document.addEventListener('keydown', (event) => {
  let oneClass; // need for capsLock. up only letters
  if (event) {
    textarea.focus();
  }
  keys.forEach((key) => {
    key.forEach((keyCode) => {
      oneClass = keyCode.class.split(' ');
      if (event.code === oneClass[0]) {
        const press = document.querySelector(`.${event.code}`);
        press.parentNode.classList.add('active');
      }
    });
  });

  if (event.code === 'Tab') {
    event.preventDefault();
    textarea.value += '\t';
    return;
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (pressShift) {
      shiftChange();
    }
    pressShift = false;
  }
  if (
    (event.code === 'ShiftLeft' && event.altKey)
        || (event.code === 'AltLeft' && event.shiftKey)
  ) {
    languageChange();
    if (localStorage.getItem('language', false) === 'false') {
      localStorage.setItem('language', true);
    } else {
      localStorage.setItem('language', false);
    }
    pressShift = false;
  }
  if (event.code === 'CapsLock') {
    capsChange();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' && event.shiftKey) {
    return;
  }
  document.querySelectorAll('.active').forEach((elem, i) => {
    if (document.querySelectorAll('.active')[i]) {
      const active = document.querySelectorAll('.active')[i];
      active.classList.remove('active');
    }
  });
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftChange();
    pressShift = true;
  }
});

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', false);
}

if (!localStorage.getItem('caps')) {
  localStorage.setItem('caps', false);
}

if (localStorage.getItem('caps') !== 'false') {
  const firstRun = true;
  capsChange(firstRun);
}

if (localStorage.getItem('language') !== 'false') {
  languageChange();
}

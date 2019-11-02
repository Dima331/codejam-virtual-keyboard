const keys = [
        [
            { 'en': ['`', '~'], 'ru': ['ё', 'Ё'], 'keyCode': 192, 'class': 'Backquote' },
            { 'en': ['1', '!'], 'ru': ['1', '!'], 'keyCode': 49, 'class': 'Digit1' },
            { 'en': ['2', '@'], 'ru': ['2', '"'], 'keyCode': 50, 'class': 'Digit2' },
            { 'en': ['3', '#'], 'ru': ['3', '№'], 'keyCode': 51, 'class': 'Digit3' },
            { 'en': ['4', '$'], 'ru': ['4', ';'], 'keyCode': 52, 'class': 'Digit4' },
            { 'en': ['5', '%'], 'ru': ['5', '%'], 'keyCode': 53, 'class': 'Digit5' },
            { 'en': ['6', '^'], 'ru': ['6', ':'], 'keyCode': 54, 'class': 'Digit6' },
            { 'en': ['7', '&'], 'ru': ['7', '?'], 'keyCode': 55, 'class': 'Digit7' },
            { 'en': ['8', '*'], 'ru': ['8', '*'], 'keyCode': 56, 'class': 'Digit8' },
            { 'en': ['9', '('], 'ru': ['9', '('], 'keyCode': 57, 'class': 'Digit9' },
            { 'en': ['0', ')'], 'ru': ['0', ')'], 'keyCode': 48, 'class': 'Digit0' },
            { 'en': ['-', '_'], 'ru': ['-', '_'], 'keyCode': 189, 'class': 'Minus' },
            { 'en': ['=', '+'], 'ru': ['=', '+'], 'keyCode': 187, 'class': 'Equal' },
            { 'en': ['Backspace', 'Backspace'], 'ru': ['Backspace', 'Backspace'], 'keyCode': 8, 'class': 'Backspace', 'sizeClass': 'backspace' }
        ],
        [
            { 'en': ['tab', 'tab'], 'ru': ['tab', 'tab'], 'keyCode': 9, 'class': 'Tab', 'sizeClass': 'Tab' },
            { 'en': ['q', 'Q'], 'ru': ['й', 'Й'], 'keyCode': 81, 'class': 'Keyq' },
            { 'en': ['w', 'W'], 'ru': ['ц', 'Ц'], 'keyCode': 87, 'class': 'Keyq' },
            { 'en': ['e', 'E'], 'ru': ['у', 'У'], 'keyCode': 69, 'class': 'Keyq' },
            { 'en': ['r', 'R'], 'ru': ['к', 'К'], 'keyCode': 82, 'class': 'Keyq' },
            { 'en': ['t', 'T'], 'ru': ['е', 'Е'], 'keyCode': 84, 'class': 'Keyq' },
            { 'en': ['y', 'Y'], 'ru': ['н', 'Н'], 'keyCode': 89, 'class': 'Keyq' },
            { 'en': ['u', 'U'], 'ru': ['г', 'Г'], 'keyCode': 85, 'class': 'Keyq' },
            { 'en': ['i', 'I'], 'ru': ['ш', 'Ш'], 'keyCode': 73, 'class': 'Keyq' },
            { 'en': ['o', 'O'], 'ru': ['щ', 'Щ'], 'keyCode': 79, 'class': 'Keyq' },
            { 'en': ['p', 'P'], 'ru': ['з', 'З'], 'keyCode': 80, 'class': 'Keyq' },
            { 'en': ['[', '{'], 'ru': ['х', 'Х'], 'keyCode': 219, 'class': 'Minus' },
            { 'en': [']', '}'], 'ru': ['ъ', 'Ъ'], 'keyCode': 221, 'class': 'Equal' },
            { 'en': ['\\', '|'], 'ru': ['\\', '/'], 'keyCode': 220, 'class': 'Backslash', 'sizeClass': 'Backslash' }
        ],
        [
            { 'en': ['capsLk', 'capsLk'], 'ru': ['capsLk', 'capsLk'], 'keyCode': 20, 'class': 'CapsLock', 'sizeClass': 'CapsLock' },
            { 'en': ['a', 'A'], 'ru': ['ф', 'Ф'], 'keyCode': 65, 'class': 'Keyq' },
            { 'en': ['s', 'S'], 'ru': ['ы', 'Ы'], 'keyCode': 83, 'class': 'Keyq' },
            { 'en': ['d', 'D'], 'ru': ['в', 'В'], 'keyCode': 68, 'class': 'Keyq' },
            { 'en': ['f', 'F'], 'ru': ['а', 'А'], 'keyCode': 70, 'class': 'Keyq' },
            { 'en': ['g', 'G'], 'ru': ['п', 'П'], 'keyCode': 71, 'class': 'Keyq' },
            { 'en': ['h', 'H'], 'ru': ['р', 'Р'], 'keyCode': 72, 'class': 'Keyq' },
            { 'en': ['j', 'J'], 'ru': ['о', 'О'], 'keyCode': 74, 'class': 'Keyq' },
            { 'en': ['k', 'K'], 'ru': ['л', 'Л'], 'keyCode': 75, 'class': 'Keyq' },
            { 'en': ['l', 'L'], 'ru': ['д', 'Д'], 'keyCode': 76, 'class': 'Keyq' },
            { 'en': [';', ';'], 'ru': ['ж', 'Ж'], 'keyCode': 186, 'class': 'Keyq' },
            { 'en': ['\'', '\"'], 'ru': ['э', 'Э'], 'keyCode': 222, 'class': 'Minus' },
            { 'en': ['enter', 'enter'], 'ru': ['enter', 'enter'], 'keyCode': 13, 'class': 'Enter', 'sizeClass': 'enter' }
        ],
        [
            { 'en': ['shift', 'shift'], 'ru': ['shift', 'shift'], 'keyCode': 16, 'class': 'ShiftLeft', 'sizeClass': 'shift' },
            { 'en': ['z', 'Z'], 'ru': ['я', 'Я'], 'keyCode': 90, 'class': 'Keyq' },
            { 'en': ['x', 'X'], 'ru': ['ч', 'Ч'], 'keyCode': 88, 'class': 'Keyq' },
            { 'en': ['c', 'C'], 'ru': ['с', 'С'], 'keyCode': 67, 'class': 'Keyq' },
            { 'en': ['v', 'V'], 'ru': ['м', 'М'], 'keyCode': 86, 'class': 'Keyq' },
            { 'en': ['b', 'B'], 'ru': ['и', 'И'], 'keyCode': 66, 'class': 'Keyq' },
            { 'en': ['n', 'N'], 'ru': ['т', 'Т'], 'keyCode': 78, 'class': 'Keyq' },
            { 'en': ['m', 'M'], 'ru': ['ь', 'Ь'], 'keyCode': 77, 'class': 'Keyq' },
            { 'en': [',', '<'], 'ru': ['б', 'Б'], 'keyCode': 188, 'class': 'Keyq' },
            { 'en': ['.', '>'], 'ru': ['ю', 'Ю'], 'keyCode': 190, 'class': 'Keyq' },
            { 'en': ['/', '?'], 'ru': ['.', ','], 'keyCode': 191, 'class': 'Keyq' },
            { 'en': ['shift', 'shift'], 'ru': ['shift', 'shift'], 'keyCode': 16, 'class': 'ShiftRight', 'sizeClass': 'shift' }
        ],
        [
            { 'en': ['ctrl', 'ctrl'], 'ru': ['ctrl', 'ctrl'], 'keyCode': 17, 'class': 'ControlLeft', 'sizeClass': 'ControlLeft' },
            { 'en': ['win', 'win'], 'ru': ['win', 'win'], 'keyCode': 91, 'class': 'MetaLeft' },
            { 'en': ['alt', 'alt'], 'ru': ['alt', 'alt'], 'keyCode': 18, 'class': 'AltLeft', 'sizeClass': 'AltLeft' },
            { 'en': ['', ''], 'ru': ['', ''], 'keyCode': 32, 'class': 'Space', 'sizeClass': 'space' },
            { 'en': ['alt', 'alt'], 'ru': ['alt', 'alt'], 'keyCode': 18, 'class': 'AltRight', 'sizeClass': 'AltRight' },
            { 'en': ['set', 'set'], 'ru': ['set', 'set'], 'keyCode': 93, 'class': 'ContextMenu', 'sizeClass': 'ContextMenu' },
            { 'en': ['ctrl', 'ctrl'], 'ru': ['ctrl', 'ctrl'], 'keyCode': 17, 'class': 'ControlRight', 'sizeClass': 'ControlRight' },
        ]
    ]
    //console.log(keys[0][0].en.length)
let div = document.createElement('div');
div.className = "wrapper";
document.body.append(div);

let wrapper = document.querySelector('.wrapper');

let textarea = document.createElement('textarea');
wrapper.append(textarea);

let keywords = document.createElement('ul');
keywords.className = "keywords";

wrapper.append(keywords);





for (var o = 0; o < keys.length; o++) {
    let keywords__row = document.createElement('li');
    keywords__row.className = "keywords__row";
    keywords.append(keywords__row);
    console.log(o)
    for (var i = 0; i < keys[o].length; i++) {
        var keyItem = keys[o][i]
        var key = document.createElement('div');
        key.className = "key"
        keywords__row.append(key)
        if (keyItem.sizeClass) {
            key.classList.add(keyItem.sizeClass)
        }

        var spanOff = document.createElement('span');
        spanOff.className = keyItem.class + " " + "off";

        var spanOn = document.createElement('span');
        spanOn.className = keyItem.class + " " + "on";

        key.append(spanOff)
        key.append(spanOn)
        var counter = true;

        for (var j = 0; j < keyItem.en.length; j++) {
            var caseEn = document.createElement('span');
            if (counter) {
                caseEn.className = "case" + " " + "up";
            } else {
                caseEn.className = "case" + " " + "down";
            }
            caseEn.innerHTML = keyItem.en[j]
            spanOn.append(caseEn)
            counter = false
        }
        counter = true
        for (var j = 0; j < keyItem.ru.length; j++) {
            var caseRu = document.createElement('span');
            if (counter) {
                caseRu.className = "case" + " " + "up";
            } else {
                caseRu.className = "case" + " " + "down";
            }
            caseRu.innerHTML = keyItem.ru[j]
            spanOff.append(caseRu)
            counter = false
        }
    }
}
var click = document.querySelector('.keywords__row');

click.addEventListener("click", function(e) {
    var trigger;

    if (e.target.classList.contains("keywords__row")) {
        return
    }
    if (e.target.classList.contains("key")) {
        trigger = e.target;
    } else {
        trigger = e.target.parentNode.parentNode;
    }

    for (var i = 0; i < trigger.childNodes.length; i++) {
        if (trigger.childNodes[i].classList.contains('on')) {
            var tr = trigger.childNodes[i]

            for (var j = 0; j < tr.childNodes.length; j++) {
                if (tr.childNodes[j].classList.contains('up')) {
                    var tr2 = tr.childNodes[j]
                }
            }
        }
    }
    console.log(tr2.innerHTML)
        //trigger.classList.contains('on').classList.contains('up')
        // if(trigger.childNodes.className == 'on'){

    // }
    trigger.classList.add('active')
    setTimeout(function() { trigger.classList.remove('active') }, 200)
    textarea.value = textarea.value + tr2.innerHTML
})

document.addEventListener('keydown', function(event) {
    //console.log(event.code)
    // if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    //   alert('Отменить!')
    // }

    for (var i = 0; i < keys.length; i++) {
        //console.log(keys[i].class)
        if (event.code == keys[i].class) {
            var nazal = document.querySelector('.' + event.code)
            nazal.parentNode.classList.add('active')

        }

    }
});


document.addEventListener('keyup', function(event) {
    for (var i = 0; i < document.querySelectorAll('.active').length; i++) {
        if (document.querySelectorAll('.active')[i]) {
            var po = document.querySelectorAll('.active')[i]
            po.classList.remove('active')
        }
    }
});
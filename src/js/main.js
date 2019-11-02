const keys = [
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
]

let div = document.createElement('div');
div.className = "wrapper";
document.body.append(div);

let wrapper = document.querySelector('.wrapper');

let textarea = document.createElement('textarea');
wrapper.append(textarea);

let keywords = document.createElement('ul');
keywords.className = "keywords";

wrapper.append(keywords);


let keywords__row = document.createElement('li');
keywords__row.className = "keywords__row";

keywords.append(keywords__row);

for (var i = 0; i < keys.length; i++) {

    var key = document.createElement('div');
    key.className = "key"
    keywords__row.append(key)
    if (keys[i].sizeClass) {
        key.classList.add(keys[i].sizeClass)
    }

    var spanOff = document.createElement('span');
    spanOff.className = keys[i].class + " " + "off";

    var spanOn = document.createElement('span');
    spanOn.className = keys[i].class + " " + "on";

    key.append(spanOff)
    key.append(spanOn)
    var counter = true;

    for (var j = 0; j < keys[j].en.length; j++) {
        var caseEn = document.createElement('span');
        if (counter) {
            caseEn.className = "case" + " " + "up";
        } else {
            caseEn.className = "case" + " " + "down";
        }
        caseEn.innerHTML = keys[i].en[j]
        spanOn.append(caseEn)
        counter = false
    }
    counter = true
    for (var j = 0; j < keys[j].ru.length; j++) {
        var caseRu = document.createElement('span');
        if (counter) {
            caseRu.className = "case" + " " + "up";
        } else {
            caseRu.className = "case" + " " + "down";
        }
        caseRu.innerHTML = keys[i].ru[j]
        spanOff.append(caseRu)
        counter = false
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
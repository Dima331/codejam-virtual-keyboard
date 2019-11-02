const keys = [
    { 'en': ['`', '~'], 'ru': ['ё', 'Ё'], 'keyCode': 192, 'class': 'Backquote' },
    { 'en': ['1', '!'], 'ru': ['1', '!'], 'keyCode': 49, 'class': 'Digital1' },
    { 'en': ['2', '@'], 'ru': ['2', '"'], 'keyCode': 50, 'class': 'Digital2' },
    { 'en': ['3', '#'], 'ru': ['3', '№'], 'keyCode': 51, 'class': 'Digital3' },
    { 'en': ['4', '$'], 'ru': ['4', ';'], 'keyCode': 52, 'class': 'Digital4' },
    { 'en': ['5', '%'], 'ru': ['5', '%'], 'keyCode': 53, 'class': 'Digital5' },
    { 'en': ['6', '^'], 'ru': ['6', ':'], 'keyCode': 54, 'class': 'Digital6' },
    { 'en': ['7', '&'], 'ru': ['7', '?'], 'keyCode': 55, 'class': 'Digital7' },
    { 'en': ['8', '*'], 'ru': ['8', '*'], 'keyCode': 56, 'class': 'Digital8' },
    { 'en': ['9', '('], 'ru': ['9', '('], 'keyCode': 57, 'class': 'Digital9' },
    { 'en': ['0', ')'], 'ru': ['0', ')'], 'keyCode': 48, 'class': 'Digital0' },
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

        textarea.value = textarea.value + tr2.innerHTML
    })
    // console.log(tr2.innerHTML)
    // var slkdf = tr2.innerHTML;
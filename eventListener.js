function doFirst() {
    // 跟 HTML 產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = setEvent

}

function setEvent(e) {
    // console.log(e);
    e.preventDefault()

    let events = ['contextmenu', 'select', 'change', 'input', 'scroll', 'resize']

    for (let i = 0; i < events.length; i++) {
        // 先跟每個 checkbox 產生關聯
        let yourCheck = document.getElementById(events[i])

        // 如果有勾選，幫整個網頁建該事件的聆聽功能
        if (yourCheck.checked) {
            document.addEventListener(events[i], report)
        } else {
            document.removeEventListener(events[i], report)
        }
    }

    feedback = ''
}
function report(e) {
    // P: contextmenu
    feedback += `${e.target.nodeName}: ${e.type} \n`
    document.getElementById('feedback').value = feedback
}
window.addEventListener('load', doFirst)
const updateDom = (id, content) => {
    window.document.getElementById(id).innerHTML = content
}
module.exports = {
    updateDom
}
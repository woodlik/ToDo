export default (form) => {
    let formData = [...form.querySelectorAll('[name]')]
        .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value }), {});
    formData.priority = form.querySelector('[aria-selected=true]').innerText;
    formData.done = false;
    return formData;
}
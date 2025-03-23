// X-Ray format 
const imgMainParent = document.querySelector('.img-container')
var addContainer = document.getElementById('add')
var printBtn = document.getElementById('print')
var saveBtn = document.getElementById('save')

console.log('heelo')
imgMainParent.addEventListener('change', function (e) {
    if (e.target.classList.contains('img-input')) {

        const file = e.target.files[0];
        if (file) {
            const imgInput = e.target
            const previewImg = imgInput.parentElement.querySelector('.preview-img')

            const render = new FileReader()
            render.onload = function (e) {

                previewImg.src = e.target.result;
                previewImg.style.display = 'block';
                imgInput.style.display = 'none';
            }
            render.readAsDataURL(file)
        }
    }
})

const addNewSection = function () {
    var mainContainer = document.querySelector('.img-container')
    const imgContainer = `
    <div class="img-notes">
        <input type="file" class="img-input" accept="image/*">
        <br>
        <img src="" alt="uploaded image" class="preview-img" style="max-width: 250px; display: none;">
        <br>
        <textarea name="note" class="note"></textarea>
    </div>
`;
    mainContainer.insertAdjacentHTML("beforeEnd", imgContainer)
    console.log('added new container')
}
addContainer.addEventListener('click', addNewSection)

printBtn.addEventListener('click', function() {
    window.print()
})
saveBtn.addEventListener('click', function() {
    window.print()
})
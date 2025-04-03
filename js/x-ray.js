// X-Ray format 
const imgMainParent = document.querySelector('.imgs-container');
const addContainer = document.querySelector('.add-pic');
const fileInput = document.getElementById('file-input');
const insertImg = document.getElementById('insert-img');
const removeContainer = document.querySelector(".remove-pic")



insertImg.addEventListener('click', function () {
    fileInput.click()
}
)
fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const render = new FileReader();
        render.onload = function (e) {
            insertImg.src = e.target.result;
        }
        render.readAsDataURL(file);
    }
});

const addNewSection = function () {
    var mainContainer = document.querySelector('.imgs-container')
    const imgContainer = `
    <div>
            <input type="file" class="file-input" accept="image/*" style="display: none;">
            <img src="fonts/icomoon/add-image.svg" id="insert-img" class="preview-img" alt="" width="211" height="149"  />
    <div/>   
`;

    imgMainParent.insertAdjacentHTML("beforeend", imgContainer);
    console.log('added new container')

    const newImg = imgMainParent.lastElementChild.querySelector('.preview-img');
    const newFileInput = imgMainParent.lastElementChild.querySelector('.file-input');

    newImg.addEventListener('click', function () {
        newFileInput.click()
    })

    newFileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const render = new FileReader();
            render.onload = function (e) {
                newImg.src = e.target.result;
            };
            render.readAsDataURL(file);

        };
    })

    removeContainer.addEventListener('click', function (e) {
        if (imgMainParent.children.length > 2) {
            imgMainParent.removeChild(imgMainParent.lastElementChild)
        }
        else {
            console.log('Cannot remove the first container ')
        }

    })
}
addContainer.addEventListener('click', addNewSection)

// printBtn.addEventListener('click', function() {
//     window.print()
// })
// saveBtn.addEventListener('click', function() {
//     window.print()
// })



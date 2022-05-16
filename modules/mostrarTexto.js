const mostrarText = (conte, id) => {
    if (id == 1) {
        conte.innerHTML = '';
        conte.innerHTML += `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
    `
    } else if (id == 2) {
        conte.innerHTML = '';
        conte.innerHTML += `
        <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
        ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue
        massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
        ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
      `
    } else if (id == 3) {
        conte.innerHTML = '';
        conte.innerHTML += `
        <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
        condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet
        pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>                 
    `
    } else if (id == 4) {
        conte.innerHTML = '';
        conte.innerHTML += `
        <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
        Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>
    `
    } else {
        conte.innerHTML = ''
    }
}

export default mostrarText;
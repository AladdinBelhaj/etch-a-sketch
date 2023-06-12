    var button = document.querySelector('button');
    var container = document.getElementById('container');
    var slider = document.getElementById('myRange');
    var output = document.querySelector('span');

    output.innerHTML = `${slider.value}x${slider.value}`; 
    slider.oninput = function(){
        output.innerHTML = `${this.value}x${this.value}`;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        for (let i = 0; i < this.value * this.value; i++) {
            let div = document.createElement('div');
            div.classList.add('grid');
            div.style.flexBasis = `calc(100% / ${this.value})`;
            container.appendChild(div);
            let divs = document.querySelectorAll('.grid');
            divs.forEach(div=>{
                div.addEventListener('mouseover', function(){
                    div.style.backgroundColor = "red";
                });
            })
     }
    }

        for (let i = 0; i < 16 * 16; i++) {
            let div = document.createElement('div');
            div.classList.add('grid');
            div.style.flexBasis = `calc(100% / 16)`;
            container.appendChild(div);
            let divs = document.querySelectorAll('.grid');
            divs.forEach(div=>{
                div.addEventListener('mouseover', function(){
                    div.style.backgroundColor = "red";
                });
            })
        }




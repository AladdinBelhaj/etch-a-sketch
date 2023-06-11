    let button = document.querySelector('button');
    let container = document.getElementById('container');

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


        button.addEventListener('click', function() {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
              }

            n = parseInt(prompt('Give value', '0'));
            for (let i = 0; i < n * n; i++) {
                let div = document.createElement('div');
                div.classList.add('grid');
                div.style.flexBasis = `calc(100% / ${n})`;
                container.appendChild(div);
                let divs = document.querySelectorAll('.grid');
                divs.forEach(div=>{
                    div.addEventListener('mouseover', function(){
                        div.style.backgroundColor = "red";
                    });
                })
         }
     });







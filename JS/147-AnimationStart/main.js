
let animationTally = 0;
const tally = document.getElementById('tally');

document.body.addEventListener("mousemove",ele=>{
    let duration = 30
    let size = 10
    let opacity = 0.8;
    const x = ele.clientX
    const y = ele.pageY
    document.querySelectorAll(".indicator").forEach((ele) =>{
        ele.style.opacity = opacity;
        ele.style.width = `${size}px`
        ele.style.height = `${size}px`
        let translation = `translate(${x}px,${y}px)`
        const anima = ele.animate(
            {transform: translation},
            {duration: duration, fill: 'forwards'}
        );
        anima.onremove = () => {
            tally.textContent = ++animationTally
        }
        duration = duration * 2
        size = size * 0.9
    })
})

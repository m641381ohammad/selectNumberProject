let numbers = document.querySelectorAll('.rate')

function removeActive() {
    numbers.forEach(function(number) {
        number.classList.remove('active')
    })
}

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        sessionStorage.setItem('changeNumber', number.innerHTML)
        removeActive()
        number.classList.add('active')
    })
})

document.getElementById('submit').addEventListener('click', function() {
    location.href = 'result.html'
})
const submitlink = document.getElementById('submit')
console.log('abc')
if (submitlink!=null){ 
    submitlink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'buffer.html'
    });   
}



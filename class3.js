// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


function fetchData() {
    const data = `https://jsonplaceholder.typicode.com/users`;
    fetch(data)
        .then(res => res.json())
        .then(data => console.log(data))
}

const showData = document.getElementById('showData').addEventListener('click', () => {
    fetchData()
})
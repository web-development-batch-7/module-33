
const data = `https://jsonplaceholder.typicode.com/users`;
fetch(data)
    .then(res => res.json())
    .then(data => loadData(data))

const loadData = (data) => {
    // console.log(data[0]);
    // console.log(data.name);
    for (const user of data) {
        const showData = document.getElementById('showData');
        const li = document.createElement('li');
        li.innerText = user.name;
        showData.appendChild(li)
    }

}



const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");


const fortuneInput = document.querySelector('#add-fortune');
const addFortuneBtn = document.querySelector('#addFortuneButton');

const form = document.querySelector('form');

const editCustomNameButton = document.getElementById('edit-name-btn');

const deleteFortuneButton = document.getElementById('delete-button');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => console.log(input.value));
    const [name, fortune] = inputs;
    const body = {
        name: name.value,
        fortune: fortune.value
    };

    axios.post('http://localhost:4000/api/customFortune/', body)
        .then((res) => {
            console.log('Custom fortune has been created');
            const data = res.data;
            alert(data);
            // only alerting in website console log with OK pop up message!
        })
        .catch((err) => console.log(err));
});

const getCustomFortune = () => {
    axios.get('http://localhost:4000/api/getCustomFortune/')
        .then(({ data }) => {
            const fortuneContainer = document.getElementById('fortuneList');
            const fortune = document.createElement('ul');
            Object.keys(data).forEach((attr) => {
                const newFortune = document.createElement('li');
                newFortune.innerHTML = `${attr}: ${data[attr]}`
                fortune.appendChild(newFortune);
            });
            fortuneContainer.appendChild(fortune);
        })
        .catch((err) => console.log(error));
};

editCustomNameButton.addEventListener('click', () => {
    const newName = document.getElementById('edit-name-input').value;

    axios.put(`http://localhost:4000/api/editName/${newName}/`)
        .then(() => alert('name has been updated'))
        .catch((e) => console.log(e));
});

deleteFortuneButton.addEventListener('click', () => {
    axios.delete('http://localhost:4000/api/deleteFortune')
        .then(() => alert('fortune was deleted'))
        .catch((e) => console.log(e));
});
//Contains all the React code

console.log('Here!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
     options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
};

const onRemoveAll = () =>{
    //e.preventDefault();
    app.options = [];
    renderFormApp();
};

const onMakeDecision = () => {
    const ramdomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[ramdomNum];
    alert(option);
};


const user = {
    name: 'Andres',
    age: '36',
    location: 'Brisbane'
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var userName = 'Diego';
var userAge = 36;
var userLocation = 'Brisbane';
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
    );

const appRoot = document.getElementById('app');

const renderFormApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
                <button onClick={onRemoveAll}>Remove All</button>
            </form>
        </div>
        );


    ReactDOM.render(template,appRoot);
};

renderFormApp();
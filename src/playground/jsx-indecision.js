console.log("App.js is running");

// JSX - Javascript XML

const app ={
    title:'Indecision App',
    subtitle:'Put your hand in the hands of a computer',
    options:[]
};

const onFormSubmit =(e) =>{
e.preventDefault();

const option = e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value ='';
    renderTemplate();

}
};
const wipeOptions = () =>{
    app.options=[];
    renderTemplate();

};
const removeItem =() =>{
    app.options.pop();
    renderTemplate();

};

const onMakeDescision =() =>{
    const randomNum =Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);    

};

const renderTemplate = () =>{
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here is your options':'No options'}</p>
            <p>Items in options : {app.options.length}</p>
            <button disabled={app.options.length===0} onClick={onMakeDescision} className="btn btn-info">What should i do?</button>
            {
                /*numbers.map((number) => {
                    return <p key={number}>number : {number}</p>;
                })*/
            }

            <ol>
            {app.options.map((item => <li key={item}>{item}</li>))}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" className="form-control" name="option"/>
                <button className="btn btn-success px-3">Add Option</button>
                <button onClick={wipeOptions} className="btn btn-danger px-3">Remove All</button>
                <button onClick={removeItem} className="btn btn-warning px-3">Remove item</button>


            </form>

        </div>
        
        );
        const appRootTwo =document.getElementById('app2');

        ReactDOM.render(template,appRootTwo);

};
renderTemplate();



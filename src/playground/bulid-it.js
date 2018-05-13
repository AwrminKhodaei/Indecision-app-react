let visibility = false;

const toggleVisibility =() =>{
visibility = !visibility;
renderTemplate();

};



const renderTemplate = () =>{
    const template =(
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aperiam dolores facere eos atque, doloribus libero ea at laboriosam nihil eaque eius excepturi architecto minima ab. Quae ad deleniti neque.</p>
            </div>
        )}

        </div>
        
        );
        const appRootTwo =document.getElementById('app2');

        ReactDOM.render(template,appRootTwo);

};
renderTemplate();

const NewImage = (props) => {
    let formFields = {}

    return(
        <form onSubmit={(e) => {props.handleFormSubmit(formFields.url.value);
                                e.target.reset();}
        }>
            <input ref={input => formFields.url = input} placeholder='Enter url of the picture'/>
            <button>Submit</button>
        </form>
    )
}
const NewImage = (props) => {
    let formFields = {}

    return(
        <form onSubmit={(e) => {props.handleFormSubmit(formFields.url.value);
                                e.target.reset();}
        }>
            <div className={'input-group mb-3'}>
                <input className={'form-control'} ref={input => formFields.url = input} placeholder='Enter url of the picture'/>
                <div className={'input-group-append'}>
                    <button className={'btn btn-outline-secondary'}>Submit</button>
                </div>
            </div>
        </form>
    )
}
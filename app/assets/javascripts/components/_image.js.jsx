class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        if(this.state.editable){
            let url = this.url.value
            let id = this.props.image.id
            let image = {id: id, url: url}
            this.props.handleUpdate(image)
        }
        this.setState({
            editable: !this.state.editable
        })
    }

    render(){
        let url = this.state.editable ? <input type='text' ref={input => this.url = input}
                                               defaultValue={this.props.image.url}/>:
                                                <div>
                                                    <img src={this.props.image.url} alt={'picture'}/>
                                                </div>
        return(
            <div>
                {url}
                <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                <button onClick={() => this.props.handleDelete(this.props.image.id)}>Delete</button>
            </div>
        )
    }
}
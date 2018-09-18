class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewImage = this.addNewImage.bind(this)
    }

    handleFormSubmit(url){
        let body = JSON.stringify({image: {url: url}})
        fetch('http://localhost:3000/api/v1/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((image)=>{
                this.addNewImage(image)
            })

    }
    addNewImage(image){
        this.setState({
            images: this.state.images.concat(image)
        })
    }

    componentDidMount(){
        fetch('/api/v1/images.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ images: data }) });
    }
    render(){
        return(
            <div>
                <NewImage handleFormSubmit={this.handleFormSubmit}/>
                <AllImages images={this.state.images} />
            </div>
        )
    }
}
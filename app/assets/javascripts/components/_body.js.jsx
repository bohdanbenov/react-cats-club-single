class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    componentDidMount(){
        fetch('/api/v1/images.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ images: data }) });
    }
    render(){
        return(
            <div>
                <AllImages images={this.state.images} />
            </div>
        )
    }
}
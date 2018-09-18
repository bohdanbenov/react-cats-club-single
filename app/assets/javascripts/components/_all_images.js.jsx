class AllImages extends React.Component {
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
        var fruits = this.state.fruits.map((fruit) => {
            return(
                <div key={fruit.id}>
                    <h1>{fruit.name}</h1>
                    <p>{fruit.description}</p>
                </div>
            )
        })
        return(
            <div>
                {fruits}
            </div>
        )
    }
}
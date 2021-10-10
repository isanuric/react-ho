export class LoadImages extends React.Component {

    constructor(props) {
        super(props);
        this.state={imageIndex: 0}
    }

    // Call setIntrvall AFTER render()
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.changeImage();
        }, this.props.interval);
    }

    changeImage() {
            this.setState((state, props) => {
                return {
                    imageIndex: getNextIndex(props.images, state.imageIndex)
                }
            });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const currentImage = this.props.images[this.state.imageIndex];
        return (
            <img src={currentImage.src} alt={currentImage.alt} width="500" height="600"/>
        );
    }
}

const getNextIndex = (images, currentIndex) => {
    if (currentIndex === images.length - 1) {
        return 0;
    }
    return currentIndex + 1;
}
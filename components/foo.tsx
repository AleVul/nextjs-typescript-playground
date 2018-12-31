interface IProps {
    /** prop field description */
    title: string
}

/**
 * Class description
 */
class Foo extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <h4>
                {this.props.title}
            </h4>
        );
    }
}

export default Foo;
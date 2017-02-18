function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 
         WrappedComponent.name || 'Component';
}

export default function withKeyPress(WrappedComponent) {
    return class extends WrappedComponent {
        static displayName = `withKeyPress(${getDisplayName(WrappedComponent)})`
        componentDidMount() {
            document.addEventListener('keydown', this.keyPress);
            if(super.componentDidMount) {
                super.componentDidMount();
            }
        }

        componentWillUnmount() {
            document.removeEventListener('keydown', this.keyPress);
            if(super.componentWillUnmount) {
                super.componentWillUnmount();
            }
        }
        render() {
            return super.render();
        }

    }
}

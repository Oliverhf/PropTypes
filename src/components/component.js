import PropTypes from "prop-types"

function Component({name, age, renderable, element}) {
    return renderable
}


Component.propTypes = {
    children: PropTypes.element.isRequired
    // renderable: PropTypes.node.isRequired, 
    // renderable: PropTypes.element.isRequired,
    // name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
  }

export default Component
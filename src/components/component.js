import PropTypes from "prop-types"

function Component({name, age, renderable, element, state, array, person}) {
    return null
}


Component.propTypes = {
    person: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number
  })
  // person: PropTypes.shape({
  //   name: PropTypes.string,
  //   age: PropTypes.number
  // }).isRequired
  // array: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  // array: PropTypes.arrayOf(PropTypes.number)
  // state: PropTypes.oneOf([
  //   "Loading",
  //   "Ready"
  // ])
  // stringOrNumber: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ])
    // lastName: PropTypes.any.isRequired,
    // as: PropTypes.elementType.isRequired,
    // children: PropTypes.element.isRequired
    // renderable: PropTypes.node.isRequired, 
    // renderable: PropTypes.element.isRequired,
    // name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
  }

export default Component
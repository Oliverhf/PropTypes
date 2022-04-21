# React PropTypes



* All the props you define are by default optional
* You need pass `.isRequired` to be required

### You can check for:

* string
* number
* array
* bool
* object
* symbol



## There is also React specific props that you can check:

* node => means something that is renderable in React.
* element => If want make sure that is a React component.
* elementType => Check if is the name of component.
* children => Make sure that accepts only one child component.
* any => Look for any type (usually used with as `.isRequired`)
* oneOfType([]) => Check for multiple types. For example: 

        Note: The prop can be a string or number.

   
        stringOrNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])

   
* oneOf([]) => Check for values (useful if you have an enum for different states). For example:

   
        state: PropTypes.oneOf([
            "Loading",
            "Ready"
        ])

   
* arrayOf => Check for the value types inside of the array. For example:

        Note: The prop is an array that contains only number types in.

        array: PropTypes.arrayOf(PropTypes.number)

You can combine multiple pieces togther: 

        array: PropTypes.arrayOf(oneOfPropTypes.number)
   


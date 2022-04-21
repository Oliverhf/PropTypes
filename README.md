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
    * children => Make sure that accepts only one child component.
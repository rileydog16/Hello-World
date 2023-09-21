const runtimeUrl = `${window.location.origin}/runtime/runtime.js`
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, TextInput} = Elemento.components
    const Name = Elemento.useObjectState(pathWith('Name'), new TextInput.State({}))

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'The New App'),
        React.createElement(TextInput, {path: pathWith('Name'), label: 'Name'}),
        React.createElement(TextElement, {path: pathWith('Greeting')}, "Hello " + Name),
    )
}

// appMain.js
export default function NewApp(props) {
    const pathWith = name => 'NewApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'NewApp', },)
}

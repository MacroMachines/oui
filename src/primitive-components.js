import Slider from './components/slider'
import Checkbox from './components/checkbox'
import TextInput from './components/textinput'
import Folder from './components/folder'
import withTree from './components/with-tree'
import withChangeObject from './components/with-change-object'

export default new Map([
  [ 'number', withChangeObject( Slider ) ],
  [ 'string', withChangeObject( TextInput )],
  [ 'boolean', withChangeObject( Checkbox )],
  [ 'object', withChangeObject( withTree( Folder ))]
])

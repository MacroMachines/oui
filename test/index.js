import { oui, oneOf, panel } from 'oui'
import { color } from 'common-controls/colorpicker'
import { xypad } from 'common-controls/xypad'
import { graph } from 'common-controls/graph'



let a = {

    // b: 10,
    bb:{
        someProp:10,
        col:[ 1, 1, 1],
    },
    col:[ 1, 1, 1, 1 ],
    someProp2:10,
    someProp3:{x:10, y:30},
    somePropsdf:10,

    someGraph: [10, 20, 10, 20, 10, 20 ],
    // someProp4:10,
    // someProp5:10,
    // someProp6:10,
    // someProp7:10,
    // anotherValue:true,
    //
    //

    //
    // folder:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // folder2:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // folder3:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // oooh:'its a string'
}

// oneOf({ options:[20, 10, 40] })( a, 'b' )
color({open:true})( a.bb, 'col' )
color({open:true})( a, 'col' )
xypad()( a, 'someProp3' )
graph()( a, 'someGraph' )
// oui( a )
// oui( a )
// oui( a )
// oui( a )


window.a = a

let p = panel()
p( a )
p( a )
p( a )
p( a )

//
// oui.panel()( a )
//
// oui.panel()( a )
//
// oui.panel()( a )
//
// oui.panel()( {
//
//     Ooh:'its a string',
//     Ooh2:true,
//
//     folder:{
//         someOtherValue: 'This is a string',
//         someProp:10,
//     },
//     oooh:'its a string',
//     someProp:10,
//     anotherValue:true
// } )

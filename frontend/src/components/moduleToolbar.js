

var toolbarOptions= [
    ['bold', 'italic', 'underline', 'strike'] , // toggled buttons
    ['blockquote'],

    [{' header': 1},{ 'header':2}] , // custom button values
    [{'list': 'ordered'}, {'list':'bullet'}],
    [{' script':'sub'}, {'script' : 'super'}], //superscript/subscript
    [{'indent':'-1'},{ 'indent':'+1'}], //outdent/indent
    [{'direction':'rt1'}], // text direction

    //[{'size':['small', false,'large','huge] }]. //custom dropdown
    [{'header': [1,2,3,4,5,6,false] }],

    [{'color':[]},{'background':[]}],  //dropdown with defaults form theme
    [{'font': []}],
    [{'align':[]}],

    ['clean']                    // remove formatting button
];
export const modules ={
    toolbar:toolbarOptions,
}
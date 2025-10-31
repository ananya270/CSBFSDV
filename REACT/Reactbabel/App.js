const parent= document.getElementById('parent');
// console.log(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2",{style:{color:'Red',backgroundColor:'black'}},"Welcome to React App");

// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{style:{backgroundColor:'lightblue'} },li1,li2,li3);

// const pic=React.createElement("img",{src:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000 ",style:{width:'200px' , height:'200px',borderRadius:'50%'}});
// const myname=React.createElement("h1",{style:{color:"brown"}},"Ananya");
// const header=React.createElement("div",{style:{display:"flex",gap:"100px"}},pic,myname);
// const wrapper=React.createElement("div",{},h2,header,ul);
// root.render(wrapper);

//JSX
const h2 = <h2>Hello</h2>;
const li1 = <li>Java</li>;
const li2 = <li>Python</li>;
const ul = <ul>{li1}{li2}</ul>;

const container = (
  <div>
    {h2}
    {ul}
  </div>
);

root.render(container);



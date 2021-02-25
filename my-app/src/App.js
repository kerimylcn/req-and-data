
const getNames = (results) => {
  return results.reduce((acc,item)=>[...acc,item.name],[]);
};

const getAddress = (results) => {
  return results.reduce((acc,item)=>[...acc,item.address],[]);
};


const fetchKanye = () => {
  fetch('http://jsonplaceholder.typicode.com/users',{
        method:"GET"
    })
    .then((response)=> response.json())
    .then((data)=>{
      const kanye = document.getElementById("kanye")
      kanye.innerHTML = JSON.stringify(getAddress(data))
    })
}


export default function App() {
  return (
    <div className="App">
      <button onClick={() => fetchKanye()}>Kanye</button>
    <pre id="kanye"></pre>
    </div>
  );
}



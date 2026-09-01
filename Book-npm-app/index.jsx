function App() {
    return (
        <div>
            <h1><center>Book Store</center></h1>
            <Book/>
        </div>
    );
}
const parebt=document.getElementById("root");
const root=ReactDOM.createRoot(parebt);
root.render(<App />);
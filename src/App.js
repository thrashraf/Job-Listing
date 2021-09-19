import { Layout } from "./Components/Layout/Layout";
import JobBuilder from "./Container/JobBuilder";



function App() {
  return (
    <div className="App">
      <Layout>
        <JobBuilder/>
      </Layout>
    </div>
  );
}

export default App;

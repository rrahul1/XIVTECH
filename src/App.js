import './App.css';
import { collabData } from './collabData';
import CollabCard from './component/CollabCard';


function App() {

  return( 
    <>
      <div className="collab">
        <h4>Let's Collaborate</h4>
        {
          collabData && collabData.map((collab, i) => (
            <CollabCard key={i} data={collab} />
          ))
        } 
      </div>
    </>
  );
}
export default App;

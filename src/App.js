import './assets/css/style.css';
import { PDFViewer } from '@react-pdf/renderer';
import { Resume } from './components/resume';

function App() {
  return (
    <div className="App">
      <PDFViewer>
        <Resume />
      </PDFViewer>
    </div>
  );
}

export default App;

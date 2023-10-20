import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import notFound from './components/notFound';
// import { Routes, Route } from "react-router-dom";

function App() {

	const [darkMode, SetDarkMode] = useState('light');	// whether dark mode enabled or not
	const [alert, setAlert] = useState(null);	// customize alert box

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	}

	const toggleMode = () => {
		if(darkMode === 'light'){
			SetDarkMode('dark');
			document.body.style.backgroundColor = 'black';
			document.body.style.color = 'white';
			showAlert('Dark mode enabled', 'success');
			document.title = 'Text Utils - Dark Mode';
		}
		else{
			SetDarkMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
			showAlert('Dark mode disabled', 'success');
			document.title = 'Text Utils - Light Mode';
		}
	}

  return (
    <>
	    <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
	    <Alert alert={alert} />
	    <TextForm heading="Text Analyzer" label="Enter your text to analyze" showAlert={showAlert} mode={darkMode} />
	    {/*<Routes>*/}
	        {/*<Route path="/" element={ <TextForm heading="Text Analyzer" label="Enter your text to analyze" showAlert={showAlert} mode={darkMode} /> } />*/}
	        {/*<Route path="about" element={ <About /> } />*/}
	    {/*</Routes>*/}
    </>
  );
}

export default App;
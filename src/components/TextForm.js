import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

	const [buttonText, setButtonText] = useState('Convert to Uppercase'), // for changing the text of the button
	[buttonText2, setButtonText2] = useState('Convert to Lowercase'), // for changing the text of the button
	[buttonText3, setButtonText3] = useState('Capitalize Text'), // for changing the text of the button
	[buttonText4, setButtonText4] = useState('Clear Text'), // for changing the text of the button
	[buttonText5, setButtonText5] = useState('Copy to clipboard'), // for changing the text of the button
	[buttonText6, setButtonText6] = useState('Remove Extra Spaces'), // for changing the text of the button
	[text, setText] = useState('');

	const checkEmptyInput = (str) => {
		return (str === '' || str.length < 1) ? true : false;
	}

	const convertToUpper = () => {
		if(checkEmptyInput(text)){
			props.showAlert('String must no be empty.', 'warning');
			return false;
		}
		setButtonText('Converting...');
		setTimeout(()=>{
			setText(text.toUpperCase());
			props.showAlert('Converted to upper case.', 'success');
			setButtonText('Convert to Uppercase');
		}, 1500);
	}

	const convertToLower = () => {
		if(checkEmptyInput(text)){
			props.showAlert('String must no be empty.', 'warning');
			return false;
		}
		setButtonText2('Converting...');
		setTimeout(()=>{
			setText(text.toLowerCase());
			props.showAlert('Converted to lower case.', 'success');
			setButtonText2('Convert to Lowercase');
		}, 1500);
	}

	const convertToCapitalize = () => {
		if(checkEmptyInput(text)){
			props.showAlert('String must no be empty.', 'warning');
			return false;
		}
		setButtonText3('Capitalized');
		props.showAlert('Capitalized', 'success');
		setTimeout(()=>{
			
			let sentence = text,
			words = sentence.split(' ');

			for(let i=0; i<words.length; i++) {
				if(words[i][0] !== undefined)
					words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
				else
					continue;
			}
			words = words.toString();
			words = words.replaceAll(',', ' ');


			setText(words);

			words = '';
		}, 1500);
	}

	const clearText = () => {
		setText('');
		setButtonText4('Cleared');
	}

	const handleOnChange = (event) => {
		setText(event.target.value);
	}

	const copyText = () => {
		if(text !== '') {
			navigator.clipboard.writeText(text);
			props.showAlert('Text copied to clipboard.', 'success');
			setButtonText5('Copy to clipboard.');
		}else{
			props.showAlert('Empty string.', 'warning');
		}
	}

	const removeExtraSpaces = () => {
		if(checkEmptyInput(text)) {
			props.showAlert('String must no be empty.', 'warning');
			return false;
		}

		let ntext = text.split(/[ ]+/);
		setText(ntext.join(' '));
		setButtonText6('Remove Extra Spaces');
		props.showAlert('Extra Spaces Removed.', 'success');
	}

	return(
		<>
		<div className="container my-4">
			<h1>{props.heading}</h1>
			<div className="form-group mt-5">
	    		<label htmlFor="exampleFormControlTextarea1">{props.label}</label>
	    		<textarea className="form-control border border-secondary" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
	  		</div>
	  		<div className="d-flex flex-direction-row text-center align-center mt-2" style={{gridGap: 1 + 'em'}}>
	  			<button className="btn btn-primary" onClick={convertToUpper}>{buttonText}</button>
	  			<button className="btn btn-danger" onClick={convertToLower}>{buttonText2}</button>
	  			<button className="btn btn btn-success" onClick={convertToCapitalize}>{buttonText3}</button>
	  			<button className="btn btn-secondary" onClick={clearText}>{buttonText4}</button>
	  			<button className="btn btn-warning" onClick={copyText}>{buttonText5}</button>
	  			<button className="btn btn-dark" onClick={removeExtraSpaces}>{buttonText6}</button>
	  		</div>
	  		<div className="container my-3">
	  			<h3>Text Summary</h3>
	  			<p>{(text === '' ? text.split(' ')[text.split(' ').length-1] : text.split(' ').length)} words {text.length} characters</p>
	  			<p>{0.008 * text.split(' ').length} Read time (minutes)</p>
	  		</div>
		</div>
		</>
	);
}

TextForm.propTypes = {
	label: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
	label: "Enter your text to analyze",
	heading: "Text Analyzer"
}
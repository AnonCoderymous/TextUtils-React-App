import React, {useState} from 'react';

export default function About() {

	const [myStyle, setmyStyle] = useState({
		backgroundColor : 'white',
		color : 'black'
	});

	const [button, setButton] = useState('Enable Dark Mode');

	const toggleStyle = () => {
		if(myStyle.color === 'black') {
			setmyStyle({
				backgroundColor : 'black',
				color : 'white',
				outline: '1px solid white'
			});
			setButton('Disable Dark Mode');
		} else {
			setmyStyle({
				backgroundColor : 'white',
				color : 'black'
			});
			setButton('Enable Dark Mode');
		}
	}

	return(
		<>
			<div className="container my-5 p-3" style={ myStyle }>
				<h1>About</h1>
				<div id="accordion" style={ myStyle }>
				  <div className="card" style={ myStyle }>
				    <div className="card-header" id="headingOne">
				      <h5 className="mb-0">
				        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
				          Collapsible Group Item #1
				        </button>
				      </h5>
				    </div>

				    <div id="collapseOne" className="collapse show" style={ myStyle } aria-labelledby="headingOne" data-parent="#accordion">
				      <div className="card-body">
				        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				      </div>
				    </div>
				  </div>
				  <div className="card" style={ myStyle }>
				    <div className="card-header" id="headingTwo">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
				          Collapsible Group Item #2
				        </button>
				      </h5>
				    </div>
				    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				      <div className="card-body">
				        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				      </div>
				    </div>
				  </div>
				  <div className="card" style={ myStyle }>
				    <div className="card-header" id="headingThree">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
				          Collapsible Group Item #3
				        </button>
				      </h5>
				    </div>
				    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				      <div className="card-body">
				        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				      </div>
				    </div>
				  </div>
				</div>
				<button onClick={toggleStyle} className="btn btn-dark mt-3">{button}</button>
			</div>
		</>
	);
}
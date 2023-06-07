import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedBar({value}) {
  return <ProgressBar animated now={value} label={`${value}%`} className="animated-bar"/>;
}

export default AnimatedBar;


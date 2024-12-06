import "../styles/Button.css";

// children 프록스 = 안에 있는 자식들을 호출
function Button({ children, onClick, color }) {
  const className = `button ${color}`
  return (
    <div className='Button'>
      <button onClick={onClick} className={className}>{children}</button>
    </div>
  );
}

export default Button;
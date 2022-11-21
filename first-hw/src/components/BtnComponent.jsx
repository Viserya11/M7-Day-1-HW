const BtnComponent = (props) => (
    <div>
    <button onClick={function() {alert("you saved the kitten, bless your soul");}}>{props.content}</button>
    </div>
)

export default BtnComponent
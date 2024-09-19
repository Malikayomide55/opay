import './transaction.css'
import {useNavigate} from "react-router-dom";

const userData = [
  {
    type: "John Doe",
    amount: -1900,
    time: "10:45 AM",
  },
  {
    type: "Jane Smith",
    amount: -2000,
    time: "09:30 AM",
  },
  {
    type: "Mark Wilson",
    amount: +2000,
    time: "Yesterday",
  },
  {
    type: "Lucy Brown",
    amount: +100,
    time: "Yesterday",
  }
];

function Transaction( ){
	const navigate=useNavigate()
	const clickBtn=()=> {
	navigate("/back",{})
	}
return(
	<div className="transaction">
	
		<div className="Top">
			<div className="Top1">
				<div onClick={clickBtn}> Home </div>
				<div>Transaction </div>
				<div> ...</div>
			</div>
		</div>
		
		<div className="Opts">
			<div>All categories</div>
			<div>Any status</div>
		</div>
		
		<div className="Date">
			<div className="Range">
				<div>23/03/2024 - 23/04/2024</div>
			</div>
			<div className="expenses">
					<div className="In">In:₦23,546.98</div>
					<div className="space">       </div>
					<div className="Out">Out:₦23,546.98</div>
					
			</div>
		</div>
		
		<div className="chat-list">
        {userData.map((user, index) => (
          <div onClick={()=>clickBtn(user.name)} className={`chat-item ${user.read ? 'read' : 'unread'}`} key={index}>
            <div className="chat-details">
              <div className="chat-name-time">
                <span className="chat-name">{user.name}</span>
                <span className="chat-time">{user.time}</span>
              </div>
              <div className="chat-msg">{user.msg}</div>
            </div>
          </div>
        ))}
      </div>
		
	</div>
);
}

export default Transaction;
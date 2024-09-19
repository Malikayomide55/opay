import './HomeScreen.css';
import {useNavigate} from "react-router-dom";
import {useState} from 'react';

function HomeScreen(){
	
	const[acctBal]=useState("5,000,000.00")
	const[showAcctBal,setShowAcctBal]=useState(false)
	const clickBut=()=>{
		setShowAcctBal(!showAcctBal)
	}
	
	const navigate=useNavigate()
	const clickBtn=()=> {
	navigate("/Transaction",{})
	}
	
	const clickAddMoney=()=>{
	navigate("/AddMoney",{})
	}
	
	const clickTransfer=()=>{
	navigate("/Transfer",{})
	}
	
	const clickWithdraw=()=>{
	navigate("/Withdraw",{})
	}
	
	const clickHome=()=>{
	navigate("/Home",{})
	}
	
	const clickReward=()=>{
	navigate("/Reward",{})
	}
	
	const clickFinance=()=>{
	navigate("/Finance",{})
	}
	
	const clickCard=()=>{
	navigate("/Card",{})
	}
	
	const clickMe=()=>{
	navigate("/Me",{})
	}
	
	const clickAirtime=()=>{
		navigate("./Airtime",{})
	}
	
	const clickData=()=>{
		navigate("./Data",{})
	}
	
	const clickBetting=()=>{
		navigate("./Betting",{})
	}
	
	const clickTv=()=>{
		navigate("./Tv",{})
	}
	
	const clickOwealth=()=>{
		navigate("./Owealth",{})
	}
	
	const clickInvite=()=>{
		navigate("./Invite",{})
	}
	
	const clickPay4achild=()=>{
		navigate("./Pay4achild",{})
	}
	
	const clickMore=()=>{
		navigate("./More",{})
	}
	const clickToOpay=()=>{
		navigate("./ToOpay",{})
	}
	
	return(
	<div className="home">
	
		<div className="user">
			<div className="username">
				<div>Okunola welcome</div>
			</div>
			<div className="icon">
				<div><span class="material-symbols-outlined">
support_agent
</span></div>
				<div><span class="material-symbols-outlined">
qr_code_scanner
</span></div>
				<div><span class="material-symbols-outlined">
notifications_active
</span></div>
			</div>
		</div>
		
		<div className="balance">
			<div  onClick={clickBut} className="instructions">
				{showAcctBal ? 'Total Asset' : 'Total Asset'}
				<div onClick={clickBtn}>Transaction History> </div>
			</div>
			<div className="amount">
				<div> {showAcctBal? acctBal : '*****'}</div>
			</div>
			<div onClick={clickAddMoney} className="addM">
				<div>+Add money</div>
			</div>
		</div>
		
		<div className="subscriptions">
			<div className="opts">
				<div><span onClick={clickToOpay} className="material-symbols-outlined">
account_balance_wallet
</span></div>
				<div><span onClick={clickTransfer} className="material-symbols-outlined">
account_balance
</span></div>
				<div><span onClick={clickWithdraw} className="material-symbols-outlined">
payments
</span></div>
			</div>
			<div className="optsn">
				<div onClick={clickToOpay} className="ToOpay"><div>To Opay</div></div>
				<div onClick={clickTransfer}  className="Transfer"><div>Transfer</div></div>
				<div onClick={clickWithdraw} className="Withdraw"><div>Withdraw</div></div>
			</div>
			<div className="nav">
				<div className="row1">
					<div onClick={clickAirtime} className="Airtime">
						<span class="material-symbols-outlined">
signal_cellular_alt
</span>
						<div>Airtime</div>
					</div>
					<div onClick={clickData} className="Data">
						<span class="material-symbols-outlined">
cell_tower
</span>
						 <div>Data</div>
					</div>
					<div onClick={clickBetting} className="Betting">
						<span class="material-symbols-outlined">
sports_soccer
</span>
						<div>Betting</div>
					</div>
					<div onClick={clickTv} className="Tv">
						<span class="material-symbols-outlined">
smart_display
</span>
						<div>Tv</div>
					</div>
			
				</div>
				<div className="row2">
					<div onClick={clickOwealth}  className="Owealth">
						<span class="material-symbols-outlined">
savings
</span>
						<div>Owealth</div>
					</div>
					<div onClick={clickInvite} className="Invite">
						<span class="material-symbols-outlined">
money_bag
</span>
						<div>Invite</div>
					</div>
					<div onClick={clickPay4achild} className="Pay4achild">
						<span class="material-symbols-outlined">
volunteer_activism
</span>
						<div>Pay4achild</div>
					</div>
					<div onClick={clickMore} className="More">
						<span class="material-symbols-outlined">
local_convenience_store
</span>"
						<div>More</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="options">
			<div onClick={clickHome} className="Home">
				<span className="material-symbols-outlined">
home
</span>
				<div>Home</div>
			</div>
			<div onClick={clickReward} className="Reward">
				<span class="material-symbols-outlined">
diamond
</span>
				 <div>Reward</div>
			</div>
			<div onClick={clickFinance} className="Finance">
				<span class="material-symbols-outlined">
bid_landscape
</span>
				<div>Finance</div>
			</div>
			<div onClick={clickCard} className="Card">
				<span class="material-symbols-outlined">
credit_card
</span>
				<div>Card</div>
			</div>
			<div onClick={clickMe} className="Me">
				<span class="material-symbols-outlined">
account_circle
</span>
				<div>Me</div>
			</div>
		</div>
		
	</div>
	);
	}

export default HomeScreen;
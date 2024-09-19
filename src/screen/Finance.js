import './Finance.css'
import {useNavigate} from "react-router-dom";
import {useState} from 'react';

function Finance(){
	
	const[acctBal]=useState("5,000,000.00")
	const[showAcctBal,setShowAcctBal]=useState(false)
	const clickBut=()=>{
		setShowAcctBal(!showAcctBal)
	}
	
	const navigate=useNavigate()
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
	
	return(
	<div className="Fcon">
		
		<div className="Ftop">
			<div>Finance from our Partners</div> 
		</div>
		
		<div className="Fsls">
			<div className="Fslsavings">Savings</div>
			<div className="Fslsloan">Loan</div>
			<div className="Fslsetting"><span class="material-symbols-outlined">
settings
</span></div>
		</div>
		
		<div className="Ftt">
			<div onClick={clickBut} >{showAcctBal ? 'Total Asset' : 'Total Asset'}</div>
			<div className="FTl">Total Interest</div>
		</div>
		
		<div className="FP">
			<div className="FPamount">{showAcctBal? acctBal : '*****'}</div>
			<div className="FP0">0.00</div>
		</div>
		
		<div className="Frow1">
			<div className="Fwb"> 
				<div className="FwbF">
					<div><span class="material-symbols-outlined">
account_balance_wallet
</span> </div>
					<div>Wallet Balance</div>
				</div>
				<div className="Fwbtext">
					<div>You can deposit this amount in Owealth and earn daliy intrests.</div>
				</div>
				<div className="FwbP">{showAcctBal? acctBal : '*****'}</div>
			</div>
			
			<div className="Fow"> 
				<div className="FowF">
					<div><span class="material-symbols-outlined">
savings
</span></div>
					<div>Owealth</div>
				</div>
				<div className="Fowtext">
					<div>Your daily returns. You can withdraw at anytime.</div>
				</div>
				<div></div>
			</div>
			
		</div>
		
		<div className="Frow2">
			<div className="FTarget"> 
				<div className="FTargetF">
					<div><span class="material-symbols-outlined">
target
</span></div>
					<div>Target</div>
				</div>
				<div className="FTargettext">
					<div>Your daily savings. Weekly or monthly towards your targets.</div>
				</div>
				<div></div>
			</div>
			
			<div className="FSB"> 
				<div className="FSBF">
					<div><span class="material-symbols-outlined">
account_balance_wallet
</span> </div>
					<div>SaveBox</div>
				</div>
				<div className="FSBtext">
					<div>Your daily, weekly or monthly automatic saving</div>
				</div>
				<div></div>
			</div>
			
		</div>
		
		<div className="Frow3">
			<div className="FF"> 
				<div className="FFF">
					<div><span class="material-symbols-outlined">
lock
</span></div>
					<div>Fixed</div>
				</div>
				<div className="FFtext">
					<div>Set your 7-1000 days saving plan</div>
				</div>
				<div></div>
			</div>
			
			<div className="Fss"> 
				<div className="FssF">
					<div><span class="material-symbols-outlined">
money_bag
</span></div>
					<div>Spent & save</div>
				</div>
				<div className="Fsstext">
					<div>Your percentage saving anytime you spend or transfer.</div>
				</div>
				<div></div>
			</div>
			
		</div>
		
		<div className="Frow4">
			<div className="FsR"> 
				<div className="FsRF">
					<div><span class="material-symbols-outlined">
chart_data
</span></div>
					<div>Savings Report</div>
				</div>
				<div className="FsRtext">
					<div>Check out your savings journey so far</div>
				</div>
				<div></div>
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

export default Finance;